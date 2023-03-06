const userInputData = document.getElementById('userInputData');
const dataLogList = [];

//Add delete and checked button script

let addData = document.getElementById('addButton');
addData.addEventListener('click', function () {
  if (userInputData.value == '' || userInputData.value.trim() == '') {
    alert("Please add List");
    return;
  }
  else {
    for (let i = 0; i < dataLogList.length; i++) {
      if (dataLogList[i] == userInputData.value.trim()) {
        userInputData.value = '';
        alert("Redundant data not allowed");
        return;
      }
    }
    dataLogList.push(userInputData.value.trim());

    document.getElementById('main').innerHTML += `
    <section  class="newTodo mb-4 " id="task">
      <p id="newTodoData">${userInputData.value}</p>
      <i class="fa-regular fa-square-check newTodoIcons checkIcons " id="checkIcon"></i>
      <i class="fa-regular fa-trash-can newTodoIcons deleteIcons" id="deleteIcon"></i>
    </section>
    `
    var deleteIcons = document.querySelectorAll('.deleteIcons');
    var checkIcons = document.querySelectorAll('.checkIcons');

    for (let i = 0; i < deleteIcons.length; i++) {
      deleteIcons[i].addEventListener('click', function () {
        dataLogList.splice(i, 1);
        this.parentNode.remove();
      })
    }
    for (let i = 0; i < checkIcons.length; i++) {
      checkIcons[i].addEventListener('click', function () {
        const a = checkIcons[i].parentElement;
        a.firstElementChild.classList.add("textUnderline");
      })
    }
    userInputData.value = '';
  }
})

//Active button script starts here

var lowerButtonActive = document.getElementById('lowerButtonActive');
lowerButtonActive.addEventListener('click', function () {
  const newTodo = document.getElementsByClassName('newTodo');
  for (let i = 0; i < newTodo.length; i++) {
    console.log(newTodo[i]);
    if (newTodo[i].firstElementChild.classList.contains("textUnderline")) {
      newTodo[i].classList.add("notVisible");
    }
    else
      newTodo[i].classList.remove("notVisible");
  }
})

//Completed button script starts here

var lowerButtonCompleted = document.getElementById('lowerButtonCompleted');
lowerButtonCompleted.addEventListener('click', function () {
  const newTodo = document.getElementsByClassName('newTodo');
  for (let i = 0; i < newTodo.length; i++) {
    if (!newTodo[i].firstElementChild.classList.contains("textUnderline")) {
      newTodo[i].classList.add("notVisible");
    }
    else
      newTodo[i].classList.remove("notVisible");
  }
})

//All button script starts here

var lowerButtonAll = document.getElementById('lowerButtonAll');
lowerButtonAll.addEventListener('click', function () {
  const newTodo = document.getElementsByClassName('newTodo');
  for (let i = 0; i < newTodo.length; i++) {
    newTodo[i].classList.remove("notVisible");
  }
})

//Clear button script starts here

var lowerButtonClear = document.getElementById('lowerButtonClear');
lowerButtonClear.addEventListener('click', function () {
  const newTodo = document.getElementsByClassName('newTodo');
  for (let i = 0; i < newTodo.length; i++) {
    if (newTodo[i].firstElementChild.classList.contains("textUnderline")) {
      
      newTodo[i].remove();
      dataLogList.splice(i, 1);
    }
   
  }
})