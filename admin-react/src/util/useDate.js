export function getDateTime(dateString) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear().toString();
  let month = (date.getUTCMonth() + 1).toString();
  let day = date.getUTCDate().toString();
  let hour = date.getUTCHours().toString();
  let minutes = date.getUTCMinutes().toString();
  let seconds = date.getUTCSeconds().toString();

  month = zeropre(month);
  day = zeropre(day);
  hour = zeropre(hour);
  minutes = zeropre(minutes);
  seconds = zeropre(seconds);

  const dateTime = `${year}-${month}-${day}T${hour}:${minutes}:${seconds}`;
  return dateTime;
}

export function getDate(dateString) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear().toString();
  let month = (date.getUTCMonth() + 1).toString();
  let day = date.getUTCDate().toString();

  month = zeropre(month);
  day = zeropre(day);

  const dateTime = `${year}-${month}-${day}`;
  return dateTime;
}

function zeropre(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}
