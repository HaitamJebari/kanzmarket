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
        <div className="flex gap-2 py-7 px-7">
            <div className="w-[40em] h-[50em] border-6 text-black rounded-md  p-5">
                <div className="border my-7">
                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full text-center" placeholder="Search products..." />
                </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-9">
                {filteredProduct.map((product, key) => {
                    return <li key={key} className="w-full h-full"><ProductCard product={product} /> </li>
                })}
            </ul>
        </div>
    );
};