tasks = [
    {name:"Ayush", task:"task1", status:"todo"},
    {name:"Ayush", task:"task2", status:"inprogress"},
    {name:"Ayush", task:"task3", status:"done"}

];

function loadTasks() {
    for(entry in tasks){
        console.log(entry);
    }
}