function submit() {
  const fullname = document.getElementById("fullName").value;
  const address = document.getElementById("address").value;
  const mobile = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const pmode = document.getElementById("pmode").value;
  const quantity = document.getElementById("quantity").value;

  console.log("Full Name:" + fullname);
  console.log("Address:" + address);
  console.log("Mobile Number:" + mobile);
  console.log("Email:" + email);
  console.log("Payment Mode:" + pmode);
  console.log("Quantity:" + quantity);

  alert("Thank You for Enrolling " + fullname);
}

function submit1() {
  const fullname = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;

  console.log("Full Name:" + fullname);
  console.log("Email:" + email);
  console.log("Message:" + msg);

   alert("Thank You for Enrolling " + fullname);

}

function buynow() {
  // Select the product card (the parent div of the button)
  const card =document.getElementById("iPhone")

  // Get product details
  const title = card.querySelector("h3").innerText;
  const brand = card.querySelector("h4").innerText;
  const price = card.querySelector("p").innerText;
  const description = card.querySelectorAll("p")[1].innerText;

  // Print in console
  console.log("Product Details:");
  console.log("Title:", title);
  console.log("Brand:", brand);
  console.log("Price:", price);
  console.log("Description:", description);
}