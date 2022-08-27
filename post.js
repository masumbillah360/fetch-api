fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json())
.then(data=>loadData(data));

fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=>res.json())
.then(photos=>loadPhoto(photos));

const photoContainer = document.getElementById('cnt')

const loadData=(data)=>{
    for(const d of data){
        return d;
    }
}

const loadPhoto = (photos) =>{
    for (const p of photos) {
        console.log(p.title)
        const article = document.createElement('article');
        article.classList.add('col-md-3')
        article.innerHTML = `

            <div class="card" style="height: 490px;">
            <img src="${p.thumbnailUrl}" class="card-img-top" alt="...">
            <p class ='ps-3'>Post No: ${p.id}</p>
            <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                </div>
                <div class="card-footer">
                    <a href="#" class="btn btn-primary">See Deatails</a>
                </div>
            </div>
        `
        photoContainer.appendChild(article);
    }
}