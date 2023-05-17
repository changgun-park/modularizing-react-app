import { usePaymentMethods } from "../hooks/use-payment-methods";
import { PaymentMethods } from "./payment-methods";

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
