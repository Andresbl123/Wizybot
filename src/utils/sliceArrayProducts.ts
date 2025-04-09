export function getRandomPiece<T>(array: T[], size: number): T[] {
  if (Array.isArray(array) && array.length > 0) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  }
  return [];
}
