export function dedupeString(string) {
  const parts = string.split('');

  const result = parts.reduce(
    (prev, curr) => {
      if (!prev.seen[curr]) {
        prev.seen[curr] = true;
        prev.string += curr;
      }
      return prev;
    },
    { seen: {}, string: '' },
  );

  return result.string;
}
