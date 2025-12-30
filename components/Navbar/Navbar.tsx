import Link from "next/link";

export const Navbar = () => {
  return (
     <nav className="sticky bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link href="/" className="hover:text-blue-600">Kanzmarket</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <Link href="/checkout" className="hover:text-blue-600">Checkout</Link>
        </div>
        <div className="flex items-center space-x-4">Profile</div>
        </div>
     </nav>
  );
};