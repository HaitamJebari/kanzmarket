"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCartStore } from "@/store/cart-store";

export default function SuccessPage() {
    const {clearCart} = useCartStore();
    useEffect(() => {
       clearCart();
    }, [clearCart])
    return (
        <div> 
            <h1>Payment successfull!</h1>
            <Link href={"/products"}>
                Continue Shopping
            </Link>
        </div>
    );
}