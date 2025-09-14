import { products } from "@/data/products";
import { NextResponse } from "next/server";

// We're changing the type structure to make it compatible with Next.js 15+
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    const product = products.find(p => p.id === id);
    
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
