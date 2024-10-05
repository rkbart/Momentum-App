
const addTask = document.getElementById("addTask");

function revealTask() {
    const taskList = document.getElementById("taskList"); // get div
    
    //create elements
    const listItem = document.createElement("div"); //new div
    listItem.className = "listItem";

    const taskText = document.createElement("input"); // text input element
    taskText.type = "text";
    taskText.id = "taskText";
    listItem.appendChild(taskText); // show
    taskText.style.display = "block";
    
    taskText.addEventListener('keypress', (event)=>{
        if(event.key === "Enter") {
            event.preventDefault();
            if(taskText.value === ""){
                alert('Please fill in.');
            } else {
                           
            const label = document.createElement("label"); // create label
            label.textContent = taskText.value;
            
            const checkbox = document.createElement("input"); // create checkbox
            checkbox.type = "checkbox";
            
            taskText.style.display = "none";
            label.className = "label";
            
            
            listItem.appendChild(checkbox);
            listItem.appendChild(label);
            checkbox.onclick = function() {
                label.classList.toggle("completed");
            }
            
            // add delete line 
            const clearLine = document.createElement("p");
            clearLine.id = "clearLine";
            clearLine.innerText = "clear tasks";
            
            listItem.appendChild(clearLine);
            
            clearLine.onclick = function() {
                
                taskList.remove();
                clearLine.innerText = ""
                
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

