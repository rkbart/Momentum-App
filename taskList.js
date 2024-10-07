
// tasks box
const tasks = document.getElementById("tasks"); // tasks span
const taskBox = document.querySelector(".taskBox"); // hidden box

// when tasks word is clicked,
tasks.addEventListener('click', function(event){
    taskBox.style.display = 'block'; //display task box
    tasks.textContent = "";
    // event.stopPropagation();
});

//closes task box when clicked outside
document.addEventListener('click', function(event) {
    if (!taskBox.contains(event.target) && !tasks.contains(event.target)) {
        taskBox.style.display = 'none';
        tasks.textContent = "Tasks";
    }
});

const addTask = document.getElementById("addTask"); // New Task button

function revealTask() {
    const taskList = document.getElementById("taskList"); // get div for list
    
    //create elements
    const listItem = document.createElement("div"); //new div for checkbox and label
    listItem.className = "listItem"; //give class to div

    const taskText = document.createElement("input"); // text input element
    taskText.type = "text"; // define type
    taskText.id = "taskText"; //give id
    listItem.appendChild(taskText); // append
    taskText.style.display = "block"; //show text input element
    
    taskText.addEventListener('keypress', (event)=>{
        if(event.key === "Enter") { // when entered
            if(taskText.value === ""){
                alert('Please fill in.'); // alert if empty
            } else { 
                           
            const label = document.createElement("label"); // create label
            label.textContent = taskText.value; // label is = input text
            
            const checkbox = document.createElement("input"); // create checkbox
            checkbox.type = "checkbox";
            
            taskText.style.display = "none"; // hide input text
            label.className = "label"; //give class name to label
                        
            listItem.appendChild(checkbox); //append checkbox inside div
            listItem.appendChild(label); //append label inside div
            
            checkbox.onclick = function() { // when checked
                label.classList.toggle("completed"); // line-through label
            }
            
            // add delete line 
            const clearLine = document.createElement("p"); // create delete task line
            clearLine.id = "clearLine"; //give id
            clearLine.innerText = "clear tasks"; //give inner text
            
            listItem.appendChild(clearLine);// append
            
            clearLine.onclick = function() { // when clear line is clicked
                listItem.remove(); //remove div with label and checkboc
                clearLine.innerText = ""; //remove "clear tasks" line
            }
        }}
    
    })
    taskList.appendChild(listItem); // append created div
    taskText.value = "";
    item.appendChild(clearLine)

}
addTask.addEventListener('click', revealTask);

// addTask.addEventListener('click', function() {
//     const taskList = document.getElementById("taskList"); // get div
    
//     //create elements
//     const listItem = document.createElement("div"); //new div
//     listItem.classList.add("listItem");
//     const taskText = document.createElement("input"); // text input element
//     taskText.type = "text";
//     taskText.style.border = "0";
//     taskText.style.borderBottom = "1px solid rgba(0, 0, 0, 0.5)";
//     taskText.style.outline = "none";
//     listItem.appendChild(taskText); // show
    

//     taskText.addEventListener('keypress', (event)=>{
//         if(event.key === "Enter") {
//             event.preventDefault();
//             if(taskText.value === ""){
//                 alert('Please fill in.');
//             } else {
                           
//             const label = document.createElement("label"); // create label
//             label.textContent = taskText.value;
            
//             const checkbox = document.createElement("input"); // create checkbox
//             checkbox.type = "checkbox";
            
//             taskText.classList.add("taskText"); //display none
//             label.classList.add("label");
//             listItem.appendChild(checkbox);
//             listItem.appendChild(label);
                         
//             checkbox.onclick = function() {
//                 label.classList.toggle("completed");
//             }
            
//             // add delete line 
//             const clearLine = document.createElement("p");
//             clearLine.id = "clearLine";
//             clearLine.innerText = "clear tasks";
            
//             listItem.appendChild(clearLine);
            
//             clearLine.onclick = function() {
//                 listItem.removeChild(checkbox);
//                 listItem.removeChild(label);
//                 listItem.removeChild(clearLine);
//             }
//         }}
    
//     })
//     taskList.appendChild(listItem); // append created div
//     taskText.value = "";
//     item.appendChild(clearLine)
    
// });  

