// app/api/find-place-id/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface GooglePlace {
  name: string;
  formatted_address: string;
  place_id: string;
  rating?: number;
  user_ratings_total?: number;
}

interface GoogleTextSearchResponse {
  status: string;
  results?: GooglePlace[];
  error_message?: string;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query') || "Pat's Power Washing";
  
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 400 });
  }

  try {
    // Use Text Search to find the current Place ID
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`;
    
    console.log('Searching for:', query);
    
    const response = await fetch(url);
    const data: GoogleTextSearchResponse = await response.json();
    
    console.log('Search status:', data.status);
    console.log('Results found:', data.results?.length || 0);
    
    if (data.status === 'OK' && data.results && data.results.length > 0) {
      const places = data.results.map((place: GooglePlace) => ({
        name: place.name,
        address: place.formatted_address,
        place_id: place.place_id,
        rating: place.rating,
        user_ratings_total: place.user_ratings_total,
      }));
      
      console.log('\n=== FOUND PLACES ===');
      places.forEach((place, i: number) => {
        console.log(`\n${i + 1}. ${place.name}`);
        console.log(`   Address: ${place.address}`);
        console.log(`   Place ID: ${place.place_id}`);
        console.log(`   Rating: ${place.rating} (${place.user_ratings_total} reviews)`);
      });
      
      return NextResponse.json({
        status: 'success',
        count: places.length,
        places,
        message: 'Copy the place_id from the result that matches your business'
      });
    }
    
    return NextResponse.json({
      status: 'error',
      message: `No results found for "${query}"`,
      google_status: data.status,
      error_message: data.error_message
    }, { status: 404 });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
      error: 'Failed to search',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}