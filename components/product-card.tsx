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
        <Link href={"/products/1"}>
            <Card>
                {product.images && product.images[0] && (
                    <div>
                        <Image 
                        alt={product.name} 
                        src={product.images[0]} 
                        layout="fill" 
                        objectFit="cover" />
                    </div>
                )}

                <CardHeader><CardTitle> {product.name} </CardTitle></CardHeader>
                <CardContent>
                    {price && price.unit_amount && (<p> ${(price.unit_amount / 100).toFixed(2)}</p>)}
                    <Button> View Details </Button>
                </CardContent>
            </Card>
        </Link>
    );
};