export function generateYearArray() {
  const currentYear = new Date().getFullYear();
  const yearArray = [];

  for (let i = 0; i < 100; i++) {
    yearArray.push(currentYear - i);
  }

  return yearArray;
}

export function getDaysOfMonth(year, month) {
  // Month is 0-based in JavaScript, so we subtract 1 from the provided month
  const daysInMonth = new Date(year, month, 0).getDate();

  // Create an array to store the days
  const daysArray = [];

  // Loop through the days and add them to the array
  for (let day = 1; day <= daysInMonth; day++) {
    daysArray.push(day);
  }

  return daysArray;
}