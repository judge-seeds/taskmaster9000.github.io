tasks = [
    {name:"Ayush", task:"task1", status:"todo"},
    {name:"Ayush", task:"task2", status:"inprogress"},
    {name:"Ayush", task:"task2.1", status:"inprogress"},
    {name:"Ayush", task:"task3", status:"done"}

];

function loadTasks() {
    for(i = 0; i < tasks.length; i++){
        entry = tasks[i];
        output = `<div key="${i}">${entry.name}: ${entry.task}</div>`;

        document.getElementById(entry.status).innerHTML += output;
    }

}