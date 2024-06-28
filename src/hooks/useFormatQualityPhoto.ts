export const useFormatQualityPhoto = (image: string): string => {
  return `${image}`.replace(/\w\.jpg/gi, "W.jpg");
};
