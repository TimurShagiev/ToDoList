let addButton = document.querySelector('.addbutton');
let tasksBlock = document.querySelector('#taskBlock');
let iconsBlock = document.querySelector('#iconsBlock')
var counter = 0

addButton.addEventListener('click', addtask);
function addtask(){
    if (document.querySelector('#task').value.length == 0){
        alert("Введите задание");
    } else{
        counter++;
        let counterStr = counter.toString();
        let taskvalue = document.querySelector('#task').value;
        tasksBlock.innerHTML += '<div id="taskBig' + counterStr + '"><div id="taskMid' + counterStr + '">' + taskvalue + '</div></div>';
        iconsBlock.innerHTML += '<div id="iconsBiggest' + counterStr + '"><div id="iconsBig' + counterStr + '"><div class="icons" id="complete' + counterStr + '"><i class="fa-sharp fa-solid fa-check"></i></div> <div class="icons" id="edit' + counterStr + '"><i class="fa-sharp fa-solid fa-pen-to-square"></i></div> <div class="icons" id="delete' + counterStr + '"><i class="fa-sharp fa-solid fa-trash"></i></div></div></div>';
        let completeButton = document.querySelector('#complete' + counterStr);
        let editButton = document.querySelector('#edit'+ counterStr);
        let deleteButton = document.querySelector('#delete' + counterStr);
        let styleChange = document.querySelector('#iconsBiggest' + counterStr)
        styleChange.childNodes[0].style.display = "flex";
        styleChange.childNodes[0].style.marginTop = "10px";
        completeButton.addEventListener('click', complete);
        editButton.addEventListener('click', edit);
        deleteButton.addEventListener('click', deleteTask);
        // console.log(counter)
        // console.log(counterStr)
    }
}
function complete(){
    let counterStr = counter.toString();
    let Tasks = document.querySelector('#taskBig'  + counterStr);
    Tasks.childNodes[0].style.textDecoration = "line-through";
    let completeButton = document.querySelector('#complete'  + counterStr);
    completeButton.removeEventListener('click', complete);
    completeButton.addEventListener('click', uncomplete);
}
function uncomplete(){
    let counterStr = counter.toString();
    let Tasks = document.querySelector('#taskBig'  + counterStr);
    Tasks.childNodes[0].style.textDecoration = "none";
    let completeButton = document.querySelector('#complete'  + counterStr);
    completeButton.removeEventListener('click', uncomplete);
    completeButton.addEventListener('click', complete);
}
function edit(){
    let counterStr = counter.toString();
    let oneTask = document.querySelector('#taskMid' + counterStr)
    oneTask.innerHTML = '<input type="text" placeholder="редактировать задачу" id="edittask"><button id="applyedit"><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>';
    let ApplyEdit = document.querySelector('#applyedit')
    ApplyEdit.addEventListener('click', editFinal)
}
function editFinal(){
    let counterStr = counter.toString();
    let taskvalue = document.querySelector('#edittask').value;
    let oneTask = document.querySelector('#taskMid'  + counterStr);
    oneTask.innerHTML = taskvalue;
}
function deleteTask(){
    let counterStr = counter.toString();
    document.querySelector('#taskBig'  + counterStr).remove()
    document.querySelector('#iconsBig'  + counterStr).remove()
}