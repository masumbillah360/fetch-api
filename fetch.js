const container = document.getElementById('cnt');

console.log("Connected")
const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url)
.then(res=>res.json())
.then(res=>{ 
    // console.log(x)
    for(let y of res){
        const createList = document.createElement('div');
        const temp = `
        ${y.id}
        ${y.userId}
        ${y.title}
        ${y.completed}
        `;
       const element =  createList.appendChild = temp;
       container.append(element);
        console.log(y)
    }
}
    );

