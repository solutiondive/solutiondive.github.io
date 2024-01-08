export const fixed = {
  tl: (top: number | string, left: number | string) => `fixed top-${top} left-${left} z-50 `,
  br: (bottom: number | string, right: number | string) =>
    `fixed bottom-${bottom} right-${right} z-50 `,
};

export const absolute = {
  tl: (top: number | string, left: number | string) => `absolute top-${top} left-${left} `,
  br: (bottom: number | string, right: number | string) =>
    `absolute bottom-${bottom} right-${right} `,
};
