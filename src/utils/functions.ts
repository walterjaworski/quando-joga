export function formatDate(dateString: Date) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function extractNumberFromString(input: string): number | null {
  const match = input.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

type Item = {
  date: string;
};

export function findClosestDate(items: Item[]): Item | null {
  const now = new Date().getTime();
  let closestItem: Item | null = null;
  let minDiff = Infinity;

  items.forEach(item => {
    const itemDate = new Date(item.date).getTime();
    const diff = Math.abs(itemDate - now);

    if (diff < minDiff) {
      minDiff = diff;
      closestItem = item;
    }
  });

  return closestItem;
}

export function standingTextColor(description: string | null): string {
  if (description === null) {
    return "text-gray-500";
  }

  const cleanedStatus = description.toLowerCase().replace("conmebol ", "");

  switch (cleanedStatus) {
    case "libertadores":
      return "text-blue-500";
    case "libertadores qualifiers":
      return "text-teal-500";
    case "sudamericana":
      return "text-green-500";
    case "sudamericana group stage":
      return "text-gray-500";
    case "relegation":
      return "text-red-500";
    default:
      return "text-black";
  }
}
