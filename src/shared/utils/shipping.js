/*
 * the helper utility function will basically get the date today
 * and increment it by 5. The values return are just assumptions that
 * the order shipment will be received with 1 - 5 days.
 * 
 * In the long run, with more data, we can create a data model through analysis
 * to learn on the average shipment time
 */
function getShipmentETAs() {
  const today = new Date();
  let late = new Date();
  late.setDate(late.getDate() + 5);
  return [today, late];
}

export { getShipmentETAs };
