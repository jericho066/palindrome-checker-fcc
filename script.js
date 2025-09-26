const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


const checkPalindrome = () => {
    const input = textInput.value;

    //* using trim() so strings that are only spaces will trigger the alert.
    if (input.trim() === "") {
        alert("Please input a value");
        return;
    }


    const cleaned = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    if(cleaned.length === 0) {
        result.innerHTML = `${input} is not a palindrome.`;
        return;
    }


    const reversed = cleaned.split("").reverse().join("");

    if ( cleaned === reversed) {
        result.innerHTML = `${input} is a palindrome.`;
    } else {
        result.innerHTML = `${input} is not a palindrome.`;
    }

    textInput.value = ""

}

checkBtn.addEventListener("click", checkPalindrome);

document.addEventListener("DOMContentLoaded", function() {
    textInput.addEventListener("keypress", function(e) {
        //* allowing the enter key to trigger the checkPlindrome function.
        if (e.key === "Enter") {
            checkPalindrome();
        }
    })
})
