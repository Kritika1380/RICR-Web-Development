function bg() {
  const bgColor = document.getElementById("background");

  bgColor.addEventListener("change", () => changeBackground(bgColor.value));
}
function changeBackground(color){
    document.getElementById("box1").style.backgroundColor=color;
}

function heading() {
  const hColor = document.getElementById("heading");

  hColor.addEventListener("change", () => changeHeading(hColor.value));
}
function changeHeading(color){
    document.getElementById("mainheading").style.color=color;
}

function para() {
  const pColor = document.getElementById("para");

  pColor.addEventListener("change", () => changePara(pColor.value));
}
function changePara(color){
    document.getElementById("lorempara").style.color=color;
}







