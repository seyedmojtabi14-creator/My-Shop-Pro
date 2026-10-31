
import { connectedToDatabase } from "@/app/lib/mongodb";
import Product from "@/app/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectedToDatabase();

    const products = await Product.find({});

    return NextResponse.json(products, { status: 200 });

  } catch (error) {
    console.error("Products API Error:", error);

    return NextResponse.json(
      { message: "خطا در دریافت محصولات" },
      { status: 500 }
    );
  }
}
