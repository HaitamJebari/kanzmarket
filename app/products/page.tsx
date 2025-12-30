import { stripe } from "@/lib/stripe";

export default async function ProductsPage() {
 
    const products = await stripe.products.list({
        expand: ["data.default_price"]
    });

  console.log(products);
  return <div>{products.data.map(product => (
    <div key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  ))}</div>;
}