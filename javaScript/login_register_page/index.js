function login(){
    console.log("Login Button Clicked");

    const em = document.getElementById("LoginEmail").value;
    const ps = document.getElementById("LoginPassword").value;
    console.log("Email: "+em);
    console.log("Password: "+ps);


    alert("Login done")

    document.getElementById("LoginEmail").value=" ";
    document.getElementById("LoginPassword").value=" ";
    


}
function Registration()
{
    console.log("Registration Button Clicked");

    const name = document.getElementById("RegistrationFullName").value;
    const email = document.getElementById("RegistrationEmail").value;
    const password = document.getElementById("RegistrationCreatePassword").value;
    const confirm = document.getElementById("RegistrationConfirmPassword").value;

    console.log("name: " +name);
    console.log("email: " +email);
    console.log("password: " + password);
    console.log("confirm: " + confirm);

}