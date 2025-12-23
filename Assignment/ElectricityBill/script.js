function Calculate() {
  const unit = Number(document.getElementById("ElectricityUnits").value);

  if (!unit || unit <= 0) {
    alert("enter the unit");
    return;
  }

  let bill = 0;

  if (unit <= 50) {
    bill = 50 * 0.5;
  }
  if (unit > 50 && unit <= 200) {
    bill = 50 * 0.5 + (unit - 50) * 0.75;
  }
  if (unit > 50 && unit <= 450) {
    bill = 50 * 0.5 + 150 * 0.75 + (unit - 200) * 1.2;
  } else {
    bill = 50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (unit - 450) * 1.5;
  }
  const subtotal = bill;
  const subcharge = bill * 0.2;
  const totalbill = bill + bill * 0.2;

  document.getElementById("result").innerHTML =
    // "SubTotal:"+subtotal.toFixed(2);
    // "Total SubCharge Bill:" + subcharge.toFixed(2) + 
    "Total Electricity Bill:" + totalbill.toFixed(2);
 }
function Reset() {
  document.getElementById("ElectricityUnits").value = "";
  document.getElementById("result").innerHTML = "";
}
