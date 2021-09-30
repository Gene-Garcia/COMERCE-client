/*
 *
 *
 */
function getShipmentETAs() {
  const today = new Date();
  let late = new Date();
  late.setDate(late.getDate() + 5);
  return [today, late];
}

export { getShipmentETAs };
