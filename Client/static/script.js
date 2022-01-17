const searchForm = document.querySelector('#search-btn');
const createForm = document.querySelector('#create')


async function allMovies() {
    const response = await fetch('http://localhost:3000/movies') 
    const data = await response.json();
    const results = document.getElementById('showmovie');

    console.log(data)

    for(let i = data.length -1; i >= 0; i--) {

        const entry = document.createElement('div')
        const title = document.createElement('h5')
        const actor = document.createElement('p')
        const year = document.createElement('p')
        const deleteBtn = document.createElement('button');
        entry.setAttribute('id', data[i].id)
        entry.classList.add("entrybox")
        deleteBtn.textContent = 'X';
        deleteBtn.onclick = () => deleteMovie(data.id);
        title.textContent = data[i].title
        actor.textContent = data[i].actor
        year.textContent = data[i].production_year
        results.appendChild(entry)
        entry.appendChild(title)
        entry.appendChild(actor)
        entry.appendChild(year)
        entry.appendChild(deleteBtn)
        
    }
}

searchForm.addEventListener('click', allMovies);

// async function deleteMovie(id){
//     try {
//         const options = { method: 'DELETE' }
//         await fetch(`http://localhost:3000/movies/${id}`, options);
//         window.location.hash = `#movies`
//     } catch (err) {
//         console.warn(err);
//     }
// }

function createMovie(e) {
    e.preventDefault();

    let movieTitle = document.getElementById('title').value
    let movieActor = document.getElementById('actor').value
    let movieYear = document.getElementById('year').value

    if (isNaN(movieYear) || movieYear == '') {
        alert("The year must be a number");
        
      }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: movieTitle,
            actor: movieActor,
            production_year: movieYear
        })
    }

    fetch('http://localhost:3000/movies', options)
    
}


createForm.addEventListener('submit', e => createMovie(e))