export default function formatPrice(price) {
  const number = Number(price);

  if (!Number.isFinite(number)) {
    return "۰";
  }

  return new Intl.NumberFormat("fa-IR", {
    maximumFractionDigits: 2,
  })
    .format(number)
    .replace("٫", "٬");
}