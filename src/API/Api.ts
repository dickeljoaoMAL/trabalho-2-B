import { Product } from '../components/components';

const BASE_URL = 'https://fakestoreapi.com';

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar produtos da API:', error);
    return [];
  }
}
