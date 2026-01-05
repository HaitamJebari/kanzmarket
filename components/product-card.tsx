import Link from "next/link";
import Stripe from "stripe"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
    product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
    const price = product.default_price as Stripe.Price
    return (
            <Link href={`/products/${product.id}`}>
                <Card className="lg:w-[20em] max-sm:w-full lg:h-[35em] max-sm:h-full flex-1 md:w-full md:h-[100vh]">
                    {product.images && product.images[0] && (
                        <div className="">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="rounded-md w-full h-full transition-opacity duration-500 ease-in-out"
                            />
                        </div>

                    )}
                    <CardHeader><CardTitle> {product.name} </CardTitle></CardHeader>
                    <CardContent>
                        {price && price.unit_amount && (<p> ${(price.unit_amount / 100).toFixed(2)}</p>)}
                        {product.description && (<p className="h-[50px] mt-5 md:mt-1"> {product.description} </p>)}
                        <Button className="w-full h-[40px] mt-3 max-sm:mb-4 md:mb-7"> View Details </Button>
                    </CardContent>
                </Card>
            </Link>
    );
};