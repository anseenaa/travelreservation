// Author:Anseena A Sharafudeen
function validate() {
    let x = document.getElementById("na").value;
    let y = document.getElementById("em").value;
    let pl = document.getElementById("pls").value;
    let dat = document.getElementById("dt").value;
    let person = document.getElementById("per").value;
    let coupon = document.getElementById("cpn").value;
    let xreg = /^[a-zA-Z]{2,15}$/;
    let mreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (x == "" || x == null) {
        alert("name field is empty");
        return false;
    } else if (!xreg.test(x)) {
        alert("enter a valid name");
        return false;
    } else if (!mreg.test(y)) {
        alert("You have entered an invalid email address!");
        return false;
    } else if (pl === "") {
        alert("choose an option");
        return false;
    } else if (dat == "") {
        alert("Date cannot be empty");
        return false;
    } else if (person == "") {
        alert("enter number of persons");
        return false;
    } else if (person < 0) {
        alert("enter valid number of persons");
        return false;
    } else if (isNaN(person)) {
        alert("please enter the number");
        return false;
    } else if (
        document.getElementById("ch1").checked === false &&
        document.getElementById("ch2").checked === false &&
        document.getElementById("ch3").checked === false
    ) {
        alert("choose atleast 1 option");
        return false;
    } else if (coupon == "") {
        alert("enter coupon code");
        return false;
    } else if (
        document.getElementById("radio").checked === false &&
        document.getElementById("radio").checked === false
    ) {
        alert("choose 1 option");
        return false;
    }
}
