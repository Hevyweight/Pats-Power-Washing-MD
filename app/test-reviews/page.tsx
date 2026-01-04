// app/test-reviews/page.tsx
'use client';

import { useState } from 'react';

interface APIResult {
  status?: string;
  error_message?: string;
  error?: string;
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    reviews?: Array<{
      author_name: string;
      rating: number;
      text: string;
    }>;
  };
  [key: string]: unknown;
}

export default function TestReviews() {
  const [placeId, setPlaceId] = useState('ChIJFfuWByE3E4gRJUeqvvi_EpM');
  const [apiKey, setApiKey] = useState('');
  const [result, setResult] = useState<APIResult | null>(null);
  const [loading, setLoading] = useState(false);

  const testDirect = async () => {
    setLoading(true);
    setResult(null);

    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
      
      const response = await fetch(`/api/test-proxy?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      
      setResult(data);
    } catch (error) {
      setResult({ error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  const testViaAPI = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`/api/google-reviews?placeId=${placeId}`);
      const data = await response.json();
      
      setResult(data);
    } catch (error) {
      setResult({ error: error instanceof Error ? error.message : 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Google Reviews API Tester</h1>
        
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Place ID</label>
            <input
              type="text"
              value={placeId}
              onChange={(e) => setPlaceId(e.target.value)}
              className="w-full border rounded px-3 py-2 font-mono text-sm"
              placeholder="ChIJ..."
            />
            <p className="text-xs text-gray-500 mt-1">
              Current: {placeId}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">API Key (for direct test)</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full border rounded px-3 py-2 font-mono text-sm"
              placeholder="AIza..."
            />
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={testViaAPI}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Test via Next.js API Route
          </button>

          <button
            onClick={() => {
              const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
              window.open(url, '_blank');
            }}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Test Direct (Open in New Tab)
          </button>
        </div>

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-2 text-gray-600">Testing...</p>
          </div>
        )}

        {result && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Result:</h2>
            <div className="bg-gray-900 text-green-400 p-4 rounded overflow-auto max-h-96">
              <pre className="text-xs">{JSON.stringify(result, null, 2)}</pre>
            </div>

            {result.status && (
              <div className={`mt-4 p-4 rounded ${
                result.status === 'OK' ? 'bg-green-50 text-green-800' :
                result.status === 'NOT_FOUND' ? 'bg-red-50 text-red-800' :
                result.status === 'REQUEST_DENIED' ? 'bg-yellow-50 text-yellow-800' :
                'bg-gray-50 text-gray-800'
              }`}>
                <p className="font-semibold">Status: {result.status}</p>
                {result.error_message && (
                  <p className="text-sm mt-1">Error: {result.error_message}</p>
                )}
              </div>
            )}
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 rounded">
          <h3 className="font-semibold mb-2">Quick Tips:</h3>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• Make sure Places API is enabled in Google Cloud Console</li>
            <li>• Billing must be enabled (even for free tier)</li>
            <li>• Place ID should start with &#34;ChIJ&#34;</li>
            <li>• Use the direct test to bypass Next.js and see raw Google response</li>
            <li>• Check terminal/console for detailed debug logs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}