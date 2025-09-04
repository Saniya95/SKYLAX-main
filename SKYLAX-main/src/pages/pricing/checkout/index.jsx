import Checkout from "@/container/Pricing/checkout";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [checkoutData, setCheckoutData] = useState({});
  const price = searchParams.get("price") || router.query.price;
  const type = searchParams.get("type") || router.query.type;
  const priceId = searchParams.get("priceId") || router.query.priceId;

  useEffect(() => {
    if (price && type) {
      setCheckoutData({ 
        price: price || 0, 
        type: type || "",
        priceId: priceId 
      });
    }
  }, [price, type, priceId, router.query]);

  return (
    <div>
      <Checkout checkoutData={checkoutData} />
    </div>
  );
};

export default CheckoutPage;
