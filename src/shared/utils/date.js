/*
 * this helper utility function will convert the mm-dd-yyyy format
 * into a format that is easily read by the user, specifically, easily
 * determine the month.
 *
 * The full prop tells on whether which type of month string to use.
 * If full is true or 1, then the fullMonth variable will be used, otherwise the shortcutMonth
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
