
const todoInput =document.querySelector(".todo_input");
const todoButton =document.querySelector(".todo_btn");
const todoList =document.querySelector(".todo-list");


todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteFunc)
function addTodo(event){
    event.preventDefault()
    if(todoInput.value==""){
        alert("Add a Todo")
    }
    else{

   
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo")
    const newTodo =document.createElement('li');
    
    
        newTodo.innerText=todoInput.value;

    
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const compbtn=document.createElement('button');
    compbtn.innerHTML='<i class="fas fa-check"></i>';
    compbtn.classList.add("cmp-btn")
    todoDiv.appendChild(compbtn)


    const trashbtn=document.createElement('button');
    trashbtn.innerHTML='<i class="fas fa-trash"></i>';
    trashbtn.classList.add("trash-btn")
    trashbtn.addEventListener("click",deleteFunc);
    todoDiv.appendChild(trashbtn)

    todoList.appendChild(todoDiv)
    todoInput.value="";
}
}

function deleteFunc(e){
  const item=e.target
  if(item.classList[0]==="trash-btn"){


 
  const itemdel=item.parentElement;
  itemdel.remove()
}
if(item.classList[0]==="cmp-btn"){
    const itemdel=item.parentElement;
    itemdel.classList.toggle("completed")
}
}
