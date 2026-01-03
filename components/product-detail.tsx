"use client";

import Stripe from "stripe"
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";

interface Props {
    product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
    const { items, addItem, removeItem } = useCartStore()
    const price = product.default_price as Stripe.Price;
    const cartItem = items.find((item) => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;


    const onAddItem = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: price.unit_amount as number,
            imageUrl: product.images ? product.images[0] : null,
            quantity: 1,
        })
    }
    return (
        <div>
            {product.images && product.images[0] && (
                <div>
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-[150px] h-[150px] transition-opacity duration-500 ease-in-out"
                    />
                </div>

            )}
            <div>
                <h1>{product.name}</h1>
                {product.description && (<p> {product.description} </p>)}
                {price && price.unit_amount && (<p> ${(price.unit_amount / 100).toFixed(2)}</p>)}
                <div>
                    <Button onClick={() => removeItem(product.id)} variant="outline">-</Button>
                    <span>{quantity}</span>
                    <Button onClick={onAddItem} variant="outline">+</Button>
                </div>
            </div>
        </div>
    );
};