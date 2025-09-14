import { products } from "@/data/products";
import { NextResponse } from "next/server";

// @ts-ignore - Ignoring type checking for this file
export async function GET(
  req: Request,
  { params }: any
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
