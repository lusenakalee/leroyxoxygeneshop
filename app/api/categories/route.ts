import { NextResponse } from 'next/server';

const FAKE_STORE_API_URL = 'https://fakestoreapi.com/products/categories';

export async function GET() {
  try {
    const response = await fetch(FAKE_STORE_API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }

    const categories = await response.json();

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { message: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
