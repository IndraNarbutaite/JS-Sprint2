var enterButton = document.getElementById("confirm");
var inputOne = document.querySelector(".pass1");
var inputTwo = document.querySelector(".pass2");



console.log(inputOne)
function confirm () {
    event.preventDefault(confirm);
    if (inputOne.value == "") {
        alert("please fill in 1st form");
        inputOne.value = "";
        inputTwo.value = "";
    }
    if (inputTwo.value == "") {
        alert("please fill in 2nd form");
        inputOne.value = "";
        inputTwo.value = "";
    }
    else if (inputOne.value != inputTwo.value) {
        alert("Passwords did not match."    )
        inputOne.value = "";
        inputTwo.value = "";
        return false;
    }
    else {
        inputOne.value = "";
        inputTwo.value = "";
        alert ("we will be with you shortly..")
        
        
        var element = document.querySelector(".animacija1");
         element.classList.add("animacija");
         return true;
    }

    // if (true) {
    //     var element = document.querySelector(".animacija1");
    //      element.classList.add("animacija");
    // }
    // var element = document.querySelector(".animacija1");
    // element.classList.add("animacija");
}


enterButton.addEventListener("click", confirm);

