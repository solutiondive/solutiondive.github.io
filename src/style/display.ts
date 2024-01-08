export const row = (gap?: number | "between") =>
  `${gap === "between" ? "justify-between" : `gap-${gap}`} ` + "flex flex-row  ";
export const col = (gap?: number) => `gap-${gap} flex flex-col `;

export const between = {
  row: "flex flex-row justify-between ",
  col: "flex flex-col justify-between items-center ",
};

export const center = {
  col: (gap: number) => `gap-${gap} flex flex-col items-center `,
  row: (gap: number) => `gap-${gap} flex flex-row justify-center items-center `,
  colO: (gap: number) => `gap-${gap} flex flex-col justify-center items-center `,
  rowO: (gap: number) => `gap-${gap} flex flex-row justify-center items-center `,
};

export const grid = {
  col: (col: number) => `grid grid-cols-${col} `,
  row: (row: number) => `grid grid-rows-${row} grid-flow-col `,
};

export const box = {
  row: (height: number, gap?: number) => `h-${height} gap-${gap} flex flex-row `,
  col: (width: number, gap?: number) => `w-${width} gap-${gap} flex flex-col `,
};
