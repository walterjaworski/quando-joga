export const API_BASE_URL = 'https://SEU-ENDPOINT-AQUI';

export async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${url}`);

  if (!response.ok) {
    throw new Error('Erro ao buscar dados');
  }

  return response.json();
}
