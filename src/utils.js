export const calculateRating = (votes) => {
  if (votes === 0) return 0;
  if (votes <= 12) return 1;
  if (votes <= 25) return 2;
  if (votes <= 37) return 3;
  if (votes <= 50) return 4;
  return 5;
};
