const inputData=document.getElementById('inputData');
const newTodoData=document.getElementById('newTodoData');
const all=[];
const active=[];
const completed=[];
let addData=document.getElementById('plusButton');
addData.addEventListener('click' ,function(){
  if(inputData.value==''||inputData.value.trim()=='')
  {
    alert("Please add List");
    return;
  }
  else{
    for(let i=0;i<all.length;i++)
    {
        if(all[i]==inputData.value)
        {
            inputData.value='';
            alert("Redundant data not allowed");
            return;
        }
      
        
    }
    all.push(inputData.value);

    document.getElementById('tasks').innerHTML+= `
    <section  class="newTodo mb-4 " id="task">
      <p id="newTodoData" class=" newTodo-text">${inputData.value}</p>
      <i class="fa-regular fa-square-check newTodoIcons checkIcons " id="checkIcon"></i>
      <i class="fa-regular fa-trash-can newTodoIcons deleteIcons" id="deleteIcon"></i>
    </section>
    `
   
  
 
  var deleteIcons=document.querySelectorAll('.deleteIcons');
  var checkIcons=document.querySelectorAll('.checkIcons');
  

  for(let i=0;i<deleteIcons.length;i++)
  {
      deleteIcons[i].addEventListener('click',function(){
      all.splice(i,1);
      this.parentNode.remove();
     })
  }


  for(let i=0;i<checkIcons.length;i++)
  {
      checkIcons[i].addEventListener('click',function(){
       const a=checkIcons[i].parentElement;
       a.firstElementChild.classList.add("text-underline");
     })
  }



  


  inputData.value='';
  }
})

var lowerButtonActive=document.getElementById('lowerButtonActive');
lowerButtonActive.addEventListener('click',function(){
    
  const newTodo=document.getElementsByClassName('newTodo');
  for(let i=0;i<newTodo.length;i++){
    console.log(newTodo[i]);
    if(newTodo[i].firstElementChild.classList.contains("text-underline"))
    {
      newTodo[i].classList.add("notVisible");
    }
    else
      newTodo[i].classList.remove("notVisible");

  }
})


var lowerButtonCompleted=document.getElementById('lowerButtonCompleted');
lowerButtonCompleted.addEventListener('click',function(){
    
  const newTodo=document.getElementsByClassName('newTodo');
  for(let i=0;i<newTodo.length;i++){
    
    if(!newTodo[i].firstElementChild.classList.contains("text-underline"))
    {
      newTodo[i].classList.add("notVisible");
    }
    else
      newTodo[i].classList.remove("notVisible");

  }
})



var lowerButtonAll=document.getElementById('lowerButtonAll');
lowerButtonAll.addEventListener('click',function(){
  const newTodo=document.getElementsByClassName('newTodo');
  for(let i=0;i<newTodo.length;i++){
      newTodo[i].classList.remove("notVisible");
  }
})


var lowerButtonClear=document.getElementById('lowerButtonClear');
lowerButtonClear.addEventListener('click',function(){
    
  const newTodo=document.getElementsByClassName('newTodo');
  for(let i=0;i<newTodo.length;i++){
    
    if(newTodo[i].firstElementChild.classList.contains("text-underline"))
    {
      all.splice(i,1);
      newTodo[i].remove();
    }
    

  }
})