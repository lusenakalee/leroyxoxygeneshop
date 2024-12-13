import { NextResponse } from 'next/server';

const FAKE_STORE_API_URL = 'https://fakestoreapi.com/products';

interface Params {
  id: string;
}

export async function GET(request: Request, { params }: { params: Promise<Params> }) {
  const { id } = await params;

  try {
    const response = await fetch(`${FAKE_STORE_API_URL}/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
      }
      throw new Error('Failed to fetch the product');
    }

    const product = await response.json();

    return NextResponse.json(product);
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return NextResponse.json(
      { message: 'Failed to fetch the product' },
      { status: 500 }
    );
  }
}
