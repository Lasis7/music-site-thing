export function getRandomPlaceholder(
  placeholders: string[],
  currentPlaceholder?: string,
) {
  if (currentPlaceholder) {
    const filteredPlaceholders = placeholders.filter(
      (val) => val !== currentPlaceholder,
    );
    const index = Math.floor(Math.random() * filteredPlaceholders.length);
    return filteredPlaceholders[index];
  }
  const index = Math.floor(Math.random() * placeholders.length);
  return placeholders[index];
}
