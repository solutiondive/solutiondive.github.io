export const responsiveColToRow = () => {
  const df = "flex flex-col";
  const mark = "md:flex-row";
  return [df, mark].join(" ");
};

export const responsiveRowToCol = () => {
  const df = "flex flex-row";
  const md = "md:flex-col";
  return [df, md].join(" ");
};

export const responsiveGridToCol = (gridCell: number) => {
  const df = `grid grid-cols-${gridCell}`;
  const md = "md:flex md:flex-col";
  return [df, md].join(" ");
};
