import { LocalPaymentMethod, RemotePaymentMethod } from "./types";
import { useEffect, useState } from "react";

export function usePaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>(
    []
  );

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const url = "https://online-ordering.com/api/payment-methods";
      const response = await fetch(url);
      const methods: RemotePaymentMethod[] = await response.json();

      if (methods.length > 0) {
        const extended: LocalPaymentMethod[] = methods.map((method) => ({
          provider: method.name,
          label: `Pay with ${method.name}`,
        }));
        extended.push({ provider: "cash", label: "Pay in cash" });
        setPaymentMethods(extended);
      } else {
        setPaymentMethods([]);
      }
    };

    fetchPaymentMethods();
  }, []);

  return { paymentMethods };
}

export function PaymentMethods({
  paymentMethods,
}: {
  paymentMethods: LocalPaymentMethod[];
}) {
  return (
    <>
      {paymentMethods.map((method) => (
        <label key={method.provider}>
          <input
            type="radio"
            name="payment"
            value={method.provider}
            defaultChecked={method.provider === "cash"}
          />
          <span>{method.label}</span>
        </label>
      ))}
    </>
  );
}

export default function Payment({ amount }: { amount: number }) {
  const { paymentMethods } = usePaymentMethods();

  return (
    <div>
      <h3>PAYMENT</h3>
      <div>
        <PaymentMethods paymentMethods={paymentMethods} />
      </div>
      <button>${amount}</button>
    </div>
  );
}
