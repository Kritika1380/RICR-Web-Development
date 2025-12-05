function input(char) {
  // document.getElementById("display").value = Char;
  if (char === "=") {
    try {
      const exp = document.getElementById("display").value;
      document.getElementById("display").value = eval(exp);
    } catch (error) {
      alert("invalid Expression");
      document.getElementById("display").value = " ";
    }
  } else if (char === "C") {
    document.getElementById("display").value = "";
  } else {
    let exp = document.getElementById("display").value;
    exp = exp + char;
    document.getElementById("display").value = exp;
  }
}

document.addEventListener("keydown", (abc) => {
  console.log("Pressed key", abc.key);

  if (abc.key === "Enter") {
    input("=");
  } else if (
    abc.key === "1" ||
    abc.key === "2" ||
    abc.key === "3" ||
    abc.key === "4" ||
    abc.key === "5" ||
    abc.key === "6" ||
    abc.key === "7" ||
    abc.key === "8" ||
    abc.key === "9" ||
    abc.key === "0" ||
    abc.key === "+" ||
    abc.key === "-" ||
    abc.key === "*" ||
    abc.key === "/"
  ) {
    input(abc.key);
  } else if (abc.key === "Backspace") {
    input("C");
  }
});
