"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-action";

export default function CheckoutPage() {
  const { items, addItem, removeItem, clearCart } = useCartStore();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  if (total === 0 || items.length === 0) {
    return (
      <div>
        <h1>Your Cart is empty.</h1>
      </div>
    )
  }
  return (
    <div>
      <h1>Checkout</h1>
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {items.map((item, key) => (
              <li key={key}>
                <div>
                    <span>{item.name}</span>
                    <span>${((item.price * item.quantity) / 100).toFixed(2)}</span>
                </div>
                <div>
                  <Button variant="outline" onClick={() => removeItem(item.id)}>
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button onClick={() => addItem({...item, quantity: 1})}>+</Button>
                </div>
              </li>
            ))}
          </ul>

          <div>
            Total: ${(total / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <form action={checkoutAction}>
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <Button type="submit" variant="default" >Proceed to payment</Button>
        <Button type="submit" variant="default" onClick={() => clearCart()}>Clear Cart</Button>
      </form>
   </div>
  );
}