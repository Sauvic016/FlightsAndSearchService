function compareTime(timeString1, timeString2) {
  let dateTime1 = new Date(timeString1);
  let dateTime2 = new Date(timeString2);
  return dateTime1.getTime() > dateTime2.getTime();
}

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: Items } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, Items, totalPages, currentPage };
};
module.exports = {
  compareTime,
  getPagingData,
};
