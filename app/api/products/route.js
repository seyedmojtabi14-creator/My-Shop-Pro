
import { connectedToDatabase } from "@/app/lib/mongodb";
import Product from "@/app/models/Product";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectedToDatabase();

    const {searchParams} = new URL(req.url)
    const category = searchParams.get("caفegory")

    let products

    if(category){
      products = await Product.find({category})
    }else{
      products = await Product.find({})
    }

    return NextResponse.json(products, { status: 200 });

  } catch (error) {
    console.error("Products API Error:", error);

    return NextResponse.json(
      { message: "خطا در دریافت محصولات" },
      { status: 500 }
    );
  }
}
