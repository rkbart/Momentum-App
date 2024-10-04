

function updateTime() {

    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', hour12: false };

    const timeString = now.toLocaleTimeString(undefined, options); // returns time portion of Date() and coverts it to string;
    document.getElementById('time').textContent = timeString;
    
    // change to morning, afternoon, or evening greetings 
    const hour = now.getHours();
    let greetings = document.getElementById("greetings");

    if (hour >= 0 && hour < 12) {
        greetings.innerText = "Good morning, ";    // 12 AM to 11:59 AM
        
    } else if (hour >= 12 && hour < 18) {
        greetings.innerText = "Good afternoon, ";  // 12 PM to 5:59 PM
        
    } else {
        greetings.innerText = "Good evening, ";   // 6 PM to 11:59 PM
        
    }
}
updateTime(); // display time on  first load
setInterval(updateTime, 1000); // runs updateTime() every 1 second

const quotes = [
    {kowt: "The only way to do great work is to love what you do.",
     author:"Steve Jobs"},
    {kowt: "Life is what happens when you’re busy making other plans.",
     author: "John Lennon"},
    {kowt: "Get busy living or get busy dying.",
     author: "Stephen King"},
    {kowt: "You only live once, but if you do it right, once is enough.", 
     author: "Mae West"},
    {kowt: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
     author:"Martin Luther King Jr."},
    {kowt: "The purpose of our lives is to be happy.", author: "Dalai Lama"},
    {kowt: "Life is either a daring adventure or nothing at all.", author: "Helen Keller"},
    {kowt: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde"
    }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex].kowt + " - " + quotes[randomIndex].author;
}
getRandomQuote(); // Display a quote on first load

// change name
const nameElement = document.getElementById("name"); // <span> id name

// create function when double clicked
nameElement.addEventListener('dblclick', () => {  
    const currentName = nameElement.textContent; // text content of span
    const input = document.createElement('input'); // create input in html

    input.setAttribute("id","nameInput"); // set id of input to "nameInput"
    input.type = 'text'; // set input to text type
    input.value = currentName; // set value of input to text content of span
    input.style.width = '100px';

    // Replace the name with the input field
    nameElement.textContent = '';
    nameElement.appendChild(input); // append input to span
    input.focus(); // cursor focus on created input text
    
    // Handle when the input loses focus 
    input.addEventListener('blur', () => {
        const newName = input.value.trim(); // removes spaces on input
        if (newName) {
            nameElement.textContent = newName + "."; // Update the name
        } else {
            nameElement.textContent = currentName + "."; // Revert if empty
        }
    });
});

// randomize background image
const bgImage = ["https://images.pexels.com/photos/4840134/pexels-photo-4840134.jpeg",
    "https://static.wixstatic.com/media/74de77_806e1e3a7b9f49869c14b5bad8bd279b~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_702,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/74de77_806e1e3a7b9f49869c14b5bad8bd279b~mv2_d_4896_3264_s_4_2.jpg",
    "https://images.pexels.com/photos/20694211/pexels-photo-20694211/free-photo-of-oriental-hut.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13830656/pexels-photo-13830656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9796292/pexels-photo-9796292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7156912/pexels-photo-7156912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6043246/pexels-photo-6043246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6240165/pexels-photo-6240165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1564907587809-3e1969b66ad3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
const bodyBg = document.getElementsByTagName("body");
function changeBg() {
    const randomIndex = Math.floor(Math.random() * bgImage.length);
        document.body.style.backgroundImage = `url(${bgImage[randomIndex]})`;
}
changeBg(); //run function to change background

const checkInput = document.getElementById("checkInputLabel");
const textInput = document.getElementById("text-input");

function checkBoxInput() {
    checkInput.innerText = document.getElementById("text-input").value;
    textInput.style.display="none";
    document.getElementById("today").style.display = "inline";
}

textInput.addEventListener("keypress",function(event) {
    if (event.key === "Enter") {
      checkBoxInput();
      
      const inputCheckBox = document.getElementById("checkInput"); //id of checkbox
      inputCheckBox.checked = false;
      function check() {
        inputCheckBox.checked = true;
        checkInput.style.textDecoration = "line-through";
      }
      function uncheck() {
        inputCheckBox.checked = false;
        checkInput.style.textDecoration = "none";
      }
// do while cguro
      inputCheckBox.addEventListener("click", ()=>{
        check();
        inputCheckBox.addEventListener("click",uncheck);
      });
    };
  }
);

// tasks box
const tasks = document.getElementById("tasks"); // tasks word
const taskBox = document.querySelector(".taskBox"); // hidden box

tasks.addEventListener('click', function(event){
    taskBox.style.display = 'block';
    tasks.textContent = "";
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    if (!taskBox.contains(event.target) && !tasks.contains(event.target)) {
        taskBox.style.display = 'none';
        tasks.textContent = "Tasks";
    }
});

