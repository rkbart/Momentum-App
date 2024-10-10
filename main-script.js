const expxortTextInput = document.getElementById("text-input");
const continueBtn = document.getElementById("continue-btn");

expxortTextInput.addEventListener("keypress", (event)=>{
    if(event.key === "Enter"){
        continueBtn.focus();
    }
})

continueBtn.onclick = ()=>{
    if (expxortTextInput.value === "") {
        document.getElementById("p1").textContent = "Please let us know how to address you."
    } else {
        const inputValue = expxortTextInput.value; //input value variable
        localStorage.setItem('inputValue', inputValue); //save input value to storage (keyname, value)
        window.location.href = "index.html"; // change page

    }
    
}
