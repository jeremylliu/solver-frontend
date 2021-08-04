const API_URL = process.env.NEXT_PUBLIC_API_KEY;

async function fetchAPI(path: String, data: any) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(API_URL! + path, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      data,
    }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json;
}

export async function processImage(imgStr: String) {
  const data = await fetchAPI('image/', imgStr);
  return data;
}

export async function solve(board: Array<String>) {
  const data = await fetchAPI('solve/', board);
  return data;
}
