function sumbit() {
  const nm = document.getElementById("FullName").value.trim();
  const em = document.getElementById("Email").value.trim();
  const ph = document.getElementById("Number").value.trim();
  const db = document.getElementById("DateOfBirth").value.trim();


  document.querySelectorAll(".Error").forEach((element)=>{
    element.innerHTML = "";
  })
  //validation start
if(!/^[A-Za-z ]+$/.test(nm)){
    alert("Wrong Input");
    return;
}

if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
   alert("Wrong Email");
    return; 
}
if(!/^[6-9]\d{9} $/.test(ph)){
    alert("Wrong phone");
    return; 
}
const currentdate = new Date();
console.log(currentdate);

const currentyear = new Date().getFullYear();
const birthyear = Number(db.split("-")[0]);
if(currentyear - birthyear<17){
    alert("not Eligible by Age");
    return
}
    
  const data = {
    FullName: nm,
    Email: em,
    Phone: ph,
    DOB: db,
  };

  console.log(data);

}
