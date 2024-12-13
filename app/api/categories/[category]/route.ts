import { NextResponse } from 'next/server';

const FAKE_STORE_API_URL = 'https://fakestoreapi.com/products/category';

interface Params {
  category: string;
}

export async function GET(request: Request, { params }: { params: Promise<Params> }) {
  const { category } = await params;

  try {
    const response = await fetch(`${FAKE_STORE_API_URL}/${category}`);

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ message: 'Category not found' }, { status: 404 });
      }
      throw new Error('Failed to fetch products in the category');
    }

    const products = await response.json();

    return NextResponse.json(products);
  } catch (error) {
    console.error(`Error fetching category '${category}':`, error);
    return NextResponse.json(
      { message: 'Failed to fetch products in the category' },
      { status: 500 }
    );
  }
}
