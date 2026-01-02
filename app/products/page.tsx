import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "@/components/carousel";
import { ProductList } from "@/components/product-list";

export default async function ProductsPage() {
    const products = await stripe.products.list({
        expand: ["data.default_price"]
    })
    return (
        <div>
            <h1>All Products</h1>
            <ProductList products={products.data} />
        </div>
    )
}