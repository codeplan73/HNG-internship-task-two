export default function formatCurrency(
  amount: number,
  locale: string = "en-us",
  currency: string = "USD"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}
