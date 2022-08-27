const container = document.getElementById('cnt');

console.log("Connected")
const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url)
.then(res=>res.json())
.then(data=>loadData (data));


const loadData = (todos) =>{
    for(const todo of todos){
        const div = document.createElement('div');
        div.classList.add('mx-auto','w-50','bg-dark', 'p-4', 'my-2', 'rounded','text-white', 'text-bold');
        const completedTask = todo.completed ? "Done":"Pending";
        const temp = `
       <h5 class = 'text-cneter'> Todo No: ${todo.id} </h5>
       <h3> ToDo Title : ${todo.title} </h3>
       <h3> ToDo Status : ${completedTask} </h3>
       `
       div.innerHTML = temp;
       container.appendChild(div);
    }
}