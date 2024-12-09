export const truncatedName = (name: string) => {
  return name.length > 45 ? `${name.slice(0, 45)}...` : name;
};