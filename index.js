function loadTodos(){
    const todos=JSON.parse(localStorage.getItem("todos")) || { "todolist":[]} ;
    console.log(todos)
    console.log(typeof todos)
    return todos
}
function addTodos(){    
    const todolist=document.getElementById('todolist');
    const heading = document.getElementById('second')
    const inputbox=document.getElementById('inputBox')
   
    const inputText=inputbox.value
    const list=document.createElement('li')    
    list.textContent=inputText
    todolist.appendChild(list)
    list.addEventListener("click",(e)=>{
      
        todolist.removeChild(list)
    })
    
}
function addTodosTolocalstorage(inputText){
    const prevtodos=loadTodos()
    prevtodos.todolist.push(inputText)
    localStorage.setItem("todos",JSON.stringify(prevtodos))
   
}
document.addEventListener('DOMContentLoaded',()=>{
    console.log("JS loadaed")
    loadTodos()
    const todolist=document.getElementById('todolist');
    const heading = document.getElementById('second')
    const inputbox=document.getElementById('inputBox')
    const button=document.getElementById('button')
    button.addEventListener("click",(e)=>{
        const inputText=inputbox.value
        if(inputText!='') {
            addTodosTolocalstorage(inputText)
            addTodos()
            inputbox.value=""
            
        }
        else{
            alert("You have not listed any TODOs yet...")
        }
    })
    inputbox.addEventListener("keypress",(e)=>{
      if(e.key=='Enter')  {const inputText=inputbox.value
        if(inputText!='') {
            addTodosTolocalstorage(inputText)
            addTodos()
            e.target.value=""
        }
        else{
            alert("You have not listed any TODOs yet...")
        }}
    })
    const alltodos=loadTodos()
    
    alltodos.todolist.forEach(element => {
        const list=document.createElement('li') 
        list.textContent=(element)
        todolist.appendChild(list)
    });   
    

  const todo=document.querySelector('li')
  todo.addEventListener("click",(e)=>{
        e.target.value=""
        todolist.removeChild(todo)
   
  })


    
})