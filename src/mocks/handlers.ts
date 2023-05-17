import { rest } from "msw";

const paymentMethods = [
  {
    name: "apple",
  },
  {
    name: "google",
  },
  {
    name: "cash",
  },
];

export const handlers = [
  rest.get(
    "https://online-ordering.com/api/payment-methods",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(paymentMethods));
    }
  ),
];
