function sumbit() {
  let selectedBatchTiming = [];

  document
    .querySelectorAll("input[name='batch']:checked")
    .forEach((element) => {
      selectedBatchTiming.push(element.value);
    });

  const fullName = document.getElementById("FullName").value;
  const email = document.getElementById("Email").value;
  const mobile = document.getElementById("Number").value;
  const dob = document.getElementById("DateOfBirth").value;

  const qualification = document.getElementById("qualification").value;
  const score = document.getElementById("score").value;

  const course = document.getElementById("course").value;

  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const pinCode = document.getElementById("pincode").value;

  const coachingInfo = document.getElementById("coachingInfo").value;

  console.log({
    fullName,
    email,
    mobile,
    dob,
    qualification,
    score,
    course,
    selectedBatchTiming,
    address,
    city,
    pinCode,
    coachingInfo
  });
}
