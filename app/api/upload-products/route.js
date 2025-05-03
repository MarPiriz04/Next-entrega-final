import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const productsFilePath = path.join(process.cwd(), 'data', 'products.json');
    const productsData = fs.readFileSync(productsFilePath, 'utf8');
    const products = JSON.parse(productsData);

    // TODO: Add logic to process and potentially save products if needed

    return NextResponse.json({ message: 'Products read successfully', products });
  } catch (error) {
    console.error('Error reading products.json:', error);
    return NextResponse.json({ message: 'Error reading products file', error: error.message }, { status: 500 });
  }
}