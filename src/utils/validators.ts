export const isValidString = (value: string | null | undefined): boolean => {
  return value !== null && value !== undefined && value !== "";
};
