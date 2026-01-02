"use client";

import Link from "next/link";
import kanzmarket from '../../public/imgs/kanzmarket.jpg';
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        <div className="flex items-center space-x-4">Profile</div>
        <Button className="md:hidden flex flex-col space-y-1" onClick={() => setOpen(!open)}>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </Button>
        </div>
        {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/checkout" onClick={() => setOpen(false)}>Checkout</Link>
        </div>
      )}
     </nav>
  );
};