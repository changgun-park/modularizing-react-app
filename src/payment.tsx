import { PaymentMethod } from "./payment-method";
import { usePaymentMethods } from "./use-payment-methods";

export function PaymentMethods({
  paymentMethods,
}: {
  paymentMethods: PaymentMethod[];
}) {
  return (
    <>
      {paymentMethods.map((method) => (
        <label key={method.label}>
          <input
            type="radio"
            name="payment"
            value={method.provider}
            defaultChecked={method.isDefaultMethod}
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
