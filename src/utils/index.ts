export const formattedDate = (value: string) => {
  const d = new Date(value);

  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear().toString();
  const date = `${day}.${month}.${year}`;

  return date; //04.03.2025
};

export const filterOption = (
  input: string,
  option?: { label: string; value: string }
) =>
  (option?.label.toLocaleLowerCase() ?? "").includes(input.toLocaleLowerCase());
