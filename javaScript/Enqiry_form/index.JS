function Submit() {
  // Submit Done on click Submit Button
  console.log("Submit Done");

  // Asking if detailed are correct
  alert("Are You Sure");

  //   Details of Student as per filled by them
  const name = document.getElementById("PersonName").value;
  const number = document.getElementById("Number").value;
  const email = document.getElementById("Email").value;
  const qualification = document.getElementById("Qualification").value;
  const college = document.getElementById("CollegeName").value;
  const year = document.getElementById("Year").value;
  const branch = document.getElementById("Branch").value;

  //   Give the Details on the console side
  console.log("Student Name : " + name);
  console.log("Phone Number : " + number);
  console.log("Email : " + email);
  console.log("Qualification : " + qualification);
  console.log("College/School : " + college);
  console.log("Year : " + year);
  console.log("Branch : " + branch);

  // submit done
  alert("Submitted Successfully !");

  //   Clear the details once Submit button is clicked
  document.getElementById("PersonName").value = "";
  document.getElementById("Number").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Qualification").value = "";
  document.getElementById("CollegeName").value = "";
  document.getElementById("Year").value = "";
  document.getElementById("Branch").value = "";
}
