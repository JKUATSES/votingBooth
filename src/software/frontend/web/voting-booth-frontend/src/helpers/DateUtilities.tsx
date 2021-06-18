export const customDateFormat = (formatString: string) => {
  /*
    Example:
    customFormat("2020-07-08T18:35:48.848969") returns "08-01-2020"
     */
  let temp = formatString.split("T");
  let rawDate = temp[0].split("-");

  return rawDate[2] + "-" + rawDate[1] + "-" + rawDate[0];
};

export const localeDate = (formatString: string) => {
  /*
    Example:
    customFormat("Wed, 08 Jul 2020 11:20:03 GMT") returns "7/8/020" MM/DD/YYYY
    may return MM/DD or DD/MM depending on the user's date & region settings
     */
  let date = new Date(formatString);
  return date.toLocaleDateString();
};

export const shortDate = (dateString: string) => {
  /*
    Example:
    customFormat("Wed, 08 Jul 2020 11:20:03 GMT") returns "8-Jul-20" MM/DD/YYYY
     */
  let date = new Date(dateString);
  let day = date.getDate();
  let month_name = getMonthName(date.getMonth() + 1);
  let year = date.getFullYear().toString().slice(-2);

  return day + "-" + month_name + "-" + year;
};

export const shortTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString('en-US')
};

export const getMonthName = (month: number) => {
  switch (month) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
  }
};
