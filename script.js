const inputElement=document.querySelector('.input');
const dateElement=document.querySelector('.date');
const addButton=document.querySelector('.add-button');
const chart=document.querySelector('.chart');
const clearButton = document.querySelector('.clear-button');

let listObj=[];

function loadData()
{

    let storedList=localStorage.getItem('List');
    if(storedList){

        listObj=JSON.parse(storedList);
        render();
    }
    
}



addButton.addEventListener('click',()=>{

    if(inputElement.value !="")
    {
    listObj.push({name:inputElement.value,date:dateElement.value});

   saveData();
   render();

}
    else{
        alert("Give valid input");
    }
    
});

inputElement.addEventListener('keydown',(event)=>{

    if(event.key=="Enter"){

        listObj.push({name:inputElement.value,date:dateElement.value});
        render();

    }



});

function render() {
    chart.innerHTML = ""; // Clear previous content

    listObj.forEach((task, index) => {
        // Create task container
        const taskDiv = document.createElement("div");
        taskDiv.className = "flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-300";

        // Task text
        const taskText = document.createElement("div");
        taskText.className = "text-lg font-medium text-gray-700";
        taskText.textContent = task.name;

        // Task date
        const taskDate = document.createElement("div");
        taskDate.className = "text-gray-500 text-sm";
        taskDate.textContent = task.date ? `📅 ${task.date}` : "📅 No date";

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.className = "bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
            listObj.splice(index, 1);
            saveData();
            render();
        };

        // Append elements
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(taskDate);
        taskDiv.appendChild(deleteButton);
        chart.appendChild(taskDiv);
    });

    inputElement.value = ""; // Clear input after adding
}



clearButton.addEventListener('click', () => {
    localStorage.removeItem('List'); // Remove 'List' from localStorage
    listObj = []; // Clear the listObj array
    render(); // Re-render the list to reflect changes
});

function saveData()
{

    localStorage.setItem('List',JSON.stringify(listObj));
    console.log(JSON.parse(localStorage.getItem('List')));
}
function loadData()
{

    let storedList=localStorage.getItem('List');
    if(storedList){

        listObj=JSON.parse(storedList);
        render();
    }
    
}

loadData();