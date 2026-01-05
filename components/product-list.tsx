"use client";

import Stripe from "stripe"
import { ProductCard } from "./product-card";
import { useState } from "react";

interface Props {
    products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const filteredProduct = products.filter((product) => {
        const term = searchTerm.toLowerCase();
        const nameMatch = product.name.toLowerCase().includes(term);
        const descriptionMatch = product.description ? product.description.toLowerCase().includes(term) : false;

        return nameMatch || descriptionMatch;
    })

    return (
        <div className="flex gap-7 p-7">
            <div className="border rounded-md w-[30em] h-[100vh] max-sm:hidden p-4">
                    <label htmlFor="">Search for products </label>
                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="border text-center" placeholder="Search products..." />
            </div>
            <ul className="flex flex-wrap gap-8 w-full">
                {filteredProduct.map((product, key) => {
                    return <li key={key}><ProductCard product={product} /> </li>
                })}
            </ul>
        </div>
    );
};