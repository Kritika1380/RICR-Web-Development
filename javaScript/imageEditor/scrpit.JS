const img = document.getElementById("image").src;

console.log(img);

if (img === "http://127.0.0.1:5500/javaScript/imageEditor/index.html") {
  document.getElementById("image").style.display = "none";
}

function uploadImage() {
  const file = document.getElementById("Upload").files[0];
  const fileURL = URL.createObjectURL(file);

  // console.log(file);
  // console.log(fileURL);
  document.getElementById("image").src = fileURL;
  document.getElementById("image").style.display = "block";
  document.getElementById("uploadLabel").style.display = "none";
}

function changeBrightness() {
  const value = document.getElementById("Brightness").value;
  document.getElementById("image").style.filter = `brightness(${
    (value * 2) / 100
  })`;
}

function changeContrast() {
  const value = document.getElementById("Contrast").value;
  document.getElementById("image").style.filter = `contract(${
    (value * 2) / 100
  })`;
}
function changeGrayScale() {
  const value = document.getElementById("GrayScale").value;
  document.getElementById("image").style.filter = `GrayScale(${value}%)`;
}
function changeSepia() {
  const value = document.getElementById("Sepia").value;
  document.getElementById("image").style.filter = `Sepia(${value}%)`;
}
function changeSaturate() {
  const value = document.getElementById("Saturate").value;
  document.getElementById("image").style.filter = `Saturate(${
    (value * 2) / 100
  })`;
}
function changeHue() {
  const value = document.getElementById("Hue").value;
  document.getElementById("image").style.filter = `Hue(${value}deg)`;
}
function changeBlur() {
  const value = document.getElementById("Blur").value;
  document.getElementById("image").style.filter = `Blur(${value}px)`;
}
function changeInvert() {
  const value = document.getElementById("Invert").value;
  document.getElementById("image").style.filter = `Invert(${value}%)`;
}
