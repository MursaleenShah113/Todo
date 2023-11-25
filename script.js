// const item = document.getElementById("item")
// const todobox = document.getElementById("to-do-box");
// //const tag = document.getElementById("cross");
// //const checkbox = document.getElementById("tick");
// item.addEventListener("keyup",function(event)
// {
        
//     if (event.key == "Enter")
//     {
//         addtodo(this.value);
//         this.value = "";
       
//     }
    
    
// }
// );

// const addtodo = function(item)
//     {
//         const listItem =document.createElement("li");
//         //new
        
//          listItem.innerHTML =  `
//          ${item}
                     
//                     <input type="checkbox" id="tick">
//                     <i class="fa-solid fa-xmark"></i>
//           `
//           //other way of doing it(without using `${item}`) is '\n' + item + '\n<i class="fa-solid fa-xmark"></i>\n'

//             todobox.appendChild(listItem);    

           
//        listItem.querySelector("i").addEventListener("click",function()
//        {
//         todobox.removeChild(listItem);
        
        
//        })
       
       
//     }


//     function saveData() {
//         localStorage.setItem("data",todobox.innerHTML);
//     }

//     function display(){
//         todobox.innerHTML = localStorage.getItem("data");
//     }


var item = document.getElementById("item");
var  todobox = document.getElementById("to-do-box");
var button = document.getElementById("btn");


button.addEventListener("click", function(event) {
    var inputValue = item.value; // Get the value of the input element
      addtodo(inputValue);
      item.value ="";
      //console.log(item.value);
      
});


const addtodo = function(item)
{


    if (item.trim() === "") {
        alert("Empty text can't be added");
        return; // Exit the function if the item is empty
    }



    const listItem = document.createElement("li");
    listItem.innerHTML = ` <span class="editable-text">${item}</span>
        <input type="checkbox">
        <button>Edit</button>
        <i class="fa-solid fa-xmark"></i>
        
     
    `
   
    todobox.appendChild(listItem);
      //todobox.contentEditable(listItem);
   
    // listItem.querySelector("button").addEventListener("click",function()
    // {
    //     this.innerHTML = "save";

        
    // })


    const textElement = listItem.querySelector(".editable-text");

      
    listItem.querySelector("button").addEventListener("click", function() {
        if (this.innerHTML === "Edit") {
            // Change button text to "Save"
            this.innerHTML = "Save";

            // Make the text content editable
            textElement.contentEditable = true;

            // Focus on the editable text
            textElement.focus();
        } else if (this.innerHTML === "Save") {
            // Change button text back to "Edit"
            this.innerHTML = "Edit";

            // Make the text content non-editable
            textElement.contentEditable = false;

            // Update the text content with the edited value
            textElement.textContent = textElement.textContent.trim();
        }
    });


    





    listItem.querySelector("input").addEventListener("click",function()
    {
        this.parentElement.classList.toggle("done");
        
    })



    
    listItem.querySelector("i").addEventListener("click",function()
    {
        todobox.removeChild(listItem);
    });
}

    
    