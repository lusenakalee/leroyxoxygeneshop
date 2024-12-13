import { NextResponse } from 'next/server';

const FAKE_STORE_API_URL = 'https://fakestoreapi.com/products';

export async function GET() {
  try {
    const response = await fetch(FAKE_STORE_API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const products = await response.json();

    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching all products:', error);
    return NextResponse.json(
      { message: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
