const container = document.getElementById('cnt');

console.log("Connected")
const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url)
.then(res=>res.json())
.then(data=>loadData (data));


const loadData = (todos) =>{
    for(const todo of todos){
        const list = document.createElement('li');
        const completedTask = todo.completed ? "Done":"Not Yet";
        const temp = `
       <h5> ${todo.id} </h5>
       <h5> ${todo.userId} </h5>
       <h5> ${todo.title} </h5>
       <h5> ${completedTask} </h5>
       `
       list.innerHTML = temp;
       container.appendChild(list);
    }
}