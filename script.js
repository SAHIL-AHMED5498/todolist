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

function render(){

    let listHTML=' ';
    for(let i=0;i<listObj.length;i++)
        {
            listHTML+=`
            
            <div class="list-obj-name"> ${listObj[i].name}</div> 
            <div>${listObj[i].date} </div>
            <button onclick="
            listObj.splice(${i},1);
            saveData()

            render();
            "
             class="delete-button" >Delete</button>`


        }


    chart.innerHTML=listHTML;
    inputElement.value='';    


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