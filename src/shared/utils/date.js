/*
 *
 *
 */
function formatDate(d, full) {
  const fullMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const shortcutMonth = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const date = new Date(d);
  const month = date.getMonth();
  const day = "" + date.getDate();
  const year = "" + date.getFullYear();

  if (full === 1) return `${fullMonth[month]} ${day}, ${year}`;
  else return `${shortcutMonth[month]} ${day}, ${year}`;
}

export { formatDate };
