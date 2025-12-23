function sumbit() {
  const nm = document.getElementById("FullName").value.trim();
  const em = document.getElementById("Email").value.trim();
  const ph = document.getElementById("Number").value.trim();
  const db = document.getElementById("DateOfBirth").value.trim();
  const gp = document.getElementById("Score").value.trim();
  const ra = document.getElementById("Address").value.trim();
  const city = document.getElementById("City").value.trim();
  const pincode = document.getElementById("Pincode").value.trim();
  const gdmn = document.getElementById("GraduationNumber").value.trim();

  document.querySelectorAll(".Error").forEach((element) => {
    element.innerHTML = "";
  });

  //validation start
  if (!/^[A-Za-z ]+$/.test(nm)) {
    alert("Wrong Input");
    return;
  }
  if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    alert("Wrong Email");
    return;
  }
  if (!/^[6-9]\d{9} $/.test(ph)) {
    alert("Wrong phone");
    return;
  }
  const currentyear = new Date().getFullYear();
  const birthyear = Number(db.split("-")[0]);
  if (currentyear - birthyear < 17) {
    alert("not Eligible by Age");
    return;
  }
  if (!/^[A-F]+[1-100] $/.test(gp)) {
    alert("Wrong grade/score");
  }
  if (!/^[A-Za-z ]+$/.test(ra)) {
    alert("Wrong Input");
    return;
  }
  if (!/^[A-Za-z ]+$/.test(city)) {
    alert("Wrong Input");
    return;
  }
  if (!/^[1-8][0-8]\d{5} $/.test(pincode)) {
    alert("Wrong phone");
    return;
  }
  if (!/^[6-9]\d{9} $/.test(gdmn)) {
    alert("Wrong phone");
    return;
  }

  const data = {
    FullName: nm,
    Email: em,
    Phone: ph,
    DOB: db,
    Score: gp,
    Address: ra,
    City: city,
    PinCode: pincode,
    GraduationNumbe: gdmn,
  };
  console.log(data);
}
