import { PaymentMethod } from "../models/payment-method";

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
