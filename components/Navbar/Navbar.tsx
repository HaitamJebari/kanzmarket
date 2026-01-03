"use client";

import Link from "next/link";
import kanzmarket from '../../public/imgs/kanzmarket.jpg';
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useCartStore } from "@/store/cart-store";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="hover:text-blue-600">
          <Image
            className="h-8 w-auto"
            src={kanzmarket}
            alt={`Shop link`}
          />
        </Link>
        <div className="hidden md:flex space-x-6 ">
          <Link href="/">Home</Link>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/checkout" className="hover:text-blue-600">Checkout</Link>
        </div>
        <div className="flex items-center space-x-4 gap-8">
          {/* Profile */}

          <Link href="/checkout" className="relative hover:text-blue-600">
                <ShoppingCartIcon className="h-6 w-6"/>
                {cartCount > 0 && 
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[red] text-white">
                   {cartCount} 
                </span>}
          </Link>
        </div>
        <Button className="md:hidden bg-white flex flex-col justify-center gap-1"
          aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </Button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed bg-white w-full mt-4 flex flex-col space-y-4 text-center border-b pb-6 hover:bg-blue-600">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/checkout" onClick={() => setOpen(false)}>Checkout</Link>
        </div>
      )}

    </nav>
  );
};