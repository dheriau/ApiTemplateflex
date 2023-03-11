fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => urunleriGetir(json));


function urunleriGetir(data) {
    let temp = ''
    let urunlerDiv = document.getElementById('post-list')
    console.log(data)



    data.forEach((post) => {
        temp += `

        <li class="post-item">
                <div class="post-body"><span class="post-id">Post ID : <b>${post.id}</b></span>
                    <strong class="post-title">${post.title}</strong>
                    <p class="post-content">${post.content}</p>
                </div>
                <button class="post-button">Detaya Git</button>
            </li>

         `
    });

    urunlerDiv.innerHTML = temp
}





