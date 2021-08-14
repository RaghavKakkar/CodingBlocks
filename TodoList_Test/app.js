const todoButton = document.querySelector("addTodo");
const list= document.querySelector("list");
const inp= document.querySelector("inp");
const inputbox = document.getElementById("inputbox");

var count=1;

function addTodo(inp){

    const todo=document.createElement("div");
    id="todo"+count;
    todo.setAttribute("id",id);
    $("#list").append(todo);

    const todotext=document.createElement("input");
    todotext.setAttribute("type", "text");
    todotext.setAttribute("value",inp);
    $("#"+id).append(todotext);

    const del=document.createElement("button");
    del.innerText="Delete";
    $("#"+id).append(del);

    const upd=document.createElement("button");
    upd.innerText="Update";
    $("#"+id).append(upd);

    count+=1;
}

inputbox.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inp= inputbox.elements[0].value;
    // console.log(inp);
    if(inp!=""){
        addTodo(inp);
    }
    inputbox.elements[0].value="";
})

$("#list").on('click',(e)=>{
    e.preventDefault();
    console.log($(this));

    if($(this).innerText==="Delete"){
        console.log("Tatti");
    }
})

