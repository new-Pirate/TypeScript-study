interface PaymentPers {
  id: number;
  sum: number;
  from: string;
  to: string;
}

type Payment = Omit<PaymentPers, 'id'>;
type PaymentRequisists = Pick<PaymentPers, 'from' | 'to'>;

type ExtractEx = Extract<'from' | 'to' | Payment, string>;
type ExcludeEx = Exclude<'from' | 'to' | Payment, string>;