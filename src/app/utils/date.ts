import { format } from "date-fns/format";

//Format will be something like 02 Feb 2024
export const formatToGB = (date: string | number | Date) =>
  format(date, "dd MMM, yyyy");
