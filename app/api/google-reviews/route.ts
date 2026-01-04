// app/api/google-reviews/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const placeId = searchParams.get('placeId');
  
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

  // Debug logging
  console.log('\n=== GOOGLE PLACES API DEBUG ===');
  console.log('Timestamp:', new Date().toISOString());
  console.log('API Key present:', !!apiKey);
  console.log('API Key length:', apiKey?.length || 0);
  console.log('API Key starts with:', apiKey?.substring(0, 10) + '...');
  console.log('Place ID:', placeId);
  console.log('Place ID length:', placeId?.length || 0);

  if (!apiKey || !placeId) {
    console.error('MISSING CREDENTIALS');
    return NextResponse.json(
      { error: 'Missing API credentials' },
      { status: 400 }
    );
  }

  try {
    // Try the OLD Places API first
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
    
    console.log('Request URL (key hidden):', url.replace(apiKey, 'API_KEY_HIDDEN'));
    console.log('Making request to Google...');

    const response = await fetch(url);

    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);

    if (!response.ok) {
      console.error('HTTP Error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error body:', errorText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    console.log('Google API Status:', data.status);
    console.log('Full Response:', JSON.stringify(data, null, 2));

    // Handle different error statuses
    if (data.status === 'REQUEST_DENIED') {
      console.error('❌ REQUEST_DENIED');
      console.error('Error message:', data.error_message);
      console.error('Possible causes:');
      console.error('  1. API key not authorized for Places API');
      console.error('  2. Billing not enabled');
      console.error('  3. Referer restrictions blocking the request');
      
      return NextResponse.json({
        error: 'API request denied',
        message: data.error_message,
        status: data.status,
        debug: {
          hasApiKey: !!apiKey,
          hasPlaceId: !!placeId,
          apiKeyLength: apiKey.length
        }
      }, { status: 403 });
    }

    if (data.status === 'INVALID_REQUEST') {
      console.error('❌ INVALID_REQUEST');
      console.error('Error message:', data.error_message);
      console.error('Possible causes:');
      console.error('  1. Missing required parameters');
      console.error('  2. Invalid parameter values');
      
      return NextResponse.json({
        error: 'Invalid request',
        message: data.error_message,
        status: data.status,
        debug: {
          placeId,
          fieldsRequested: 'name,rating,user_ratings_total,reviews'
        }
      }, { status: 400 });
    }

    if (data.status === 'NOT_FOUND') {
      console.error('❌ NOT_FOUND');
      console.error('Error message:', data.error_message || 'No error message');
      console.error('Possible causes:');
      console.error('  1. Place ID does not exist in Google\'s database');
      console.error('  2. Place ID is malformed');
      console.error('  3. Business was removed from Google');
      console.error('  4. Using wrong API (try Place Details API vs Places API New)');
      
      // Try to help debug the Place ID
      console.log('\n=== PLACE ID ANALYSIS ===');
      console.log('Place ID:', placeId);
      console.log('Starts with ChIJ:', placeId?.startsWith('ChIJ'));
      console.log('Contains URL encoding:', placeId?.includes('%'));
      console.log('Has quotes:', placeId?.includes('"'));
      console.log('Trimmed length:', placeId?.trim().length);
      
      return NextResponse.json({
        error: 'Place not found',
        message: 'The Place ID does not exist or is invalid',
        status: data.status,
        debug: {
          placeId,
          placeIdLength: placeId?.length,
          placeIdValid: placeId?.startsWith('ChIJ'),
          suggestion: 'Try finding the Place ID using: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder'
        }
      }, { status: 404 });
    }

    if (data.status === 'ZERO_RESULTS') {
      console.error('❌ ZERO_RESULTS');
      console.error('Place found but no data returned');
      
      return NextResponse.json({
        error: 'No results',
        status: data.status,
        message: 'Place found but no review data available'
      }, { status: 404 });
    }

    if (data.status === 'OVER_QUERY_LIMIT') {
      console.error('❌ OVER_QUERY_LIMIT');
      console.error('You have exceeded your quota');
      
      return NextResponse.json({
        error: 'Quota exceeded',
        status: data.status,
        message: 'API quota limit reached'
      }, { status: 429 });
    }

    if (data.status !== 'OK') {
      console.error('❌ Unknown status:', data.status);
      console.error('Error message:', data.error_message);
      
      return NextResponse.json({
        error: `Google API error: ${data.status}`,
        message: data.error_message || 'Unknown error',
        status: data.status
      }, { status: 500 });
    }

    // Success!
    console.log('✅ SUCCESS');
    console.log('Place name:', data.result?.name);
    console.log('Rating:', data.result?.rating);
    console.log('Total reviews:', data.result?.user_ratings_total);
    console.log('Reviews returned:', data.result?.reviews?.length || 0);
    console.log('=== END DEBUG ===\n');

    return NextResponse.json(data);

  } catch (error) {
    console.error('\n❌ EXCEPTION CAUGHT');
    console.error('Error type:', error instanceof Error ? error.constructor.name : typeof error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('=== END DEBUG ===\n');
    
    return NextResponse.json({
      error: 'Failed to fetch reviews',
      message: error instanceof Error ? error.message : 'Unknown error',
      type: error instanceof Error ? error.constructor.name : 'Unknown'
    }, { status: 500 });
  }
}