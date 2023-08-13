const API_KEY = "L3UbqKrWPF0jU5z1UnEzJ5S5ehIqFv0USPxzKL0d";
const BASE_URL = "https://api.nasa.gov/neo/rest/v1/feed";

const formateDate = (date: string | number | Date) => {
  return new Date(date).toISOString().split("T")[0];
};

export const getTestData = async () => {
  const date = formateDate(new Date());

  const res = await fetch(
    `${BASE_URL}?start_date=${date}&end_date=${date}&api_key=${API_KEY}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
