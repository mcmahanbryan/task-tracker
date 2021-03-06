/**
 * Returns the current day in the correct format.
 * @returns A new Date set to the current date with the proper formatting.
 */
function currentDate() {
  var currentDate = new Date();
  let dd = String(currentDate.getDate()).padStart(2, "0");
  let mm = String(currentDate.getMonth() + 1).padStart(2, "0");
  let yyyy = currentDate.getFullYear();
  currentDate = yyyy + "-" + mm + "-" + dd;

  return currentDate;
}

module.exports = {
  currentDate: currentDate,
};
