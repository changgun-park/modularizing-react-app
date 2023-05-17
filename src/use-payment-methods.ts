import { RemotePaymentMethod } from "./types";
import { useEffect, useState } from "react";
import { PaymentMethod } from "./payment-method";

const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
  if (methods.length === 0) {
    return [];
  }

  const extended: PaymentMethod[] = methods.map(
    (method) => new PaymentMethod(method)
  );

  extended.push(new PaymentMethod({ name: "cash" }));

  return extended;
};

export function usePaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const url = "https://online-ordering.com/api/payment-methods";
      const response = await fetch(url);
      const methods: RemotePaymentMethod[] = await response.json();
      setPaymentMethods(convertPaymentMethods(methods));
    };

    fetchPaymentMethods();
  }, []);

  return { paymentMethods };
}
