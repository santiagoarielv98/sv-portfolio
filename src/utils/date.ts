export const formatMonthYear = (value: string) => {
  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return value;
  return new Date(year, month - 1, 1).toLocaleDateString("es-AR", {
    month: "short",
    year: "numeric",
  });
};

export const formatPeriod = (startDate: string, endDate: string) => {
  const start = formatMonthYear(startDate);
  const end =
    endDate.toLowerCase() === "presente"
      ? "Presente"
      : formatMonthYear(endDate);
  return `${start} — ${end}`;
};
