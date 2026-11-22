export function search(items, term) {
  const normalizedTerm = term.toLowerCase().trim();
  return normalizedTerm.length === 0
    ? items
    : items.filter((item) =>
        item.title.toLowerCase().includes(normalizedTerm),
      );
}

export function filterStatus(items, status) {
  switch (status) {
    case 'active':
      return items.filter((item) => !item.done);
    case 'important':
      return items.filter((item) => item.important);
    case 'done':
      return items.filter((item) => item.done);
    default:
      return items;
  }
}
