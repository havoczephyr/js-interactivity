// console.log("hello world!")
let message = document.querySelector("#message")

let addBtn = document.querySelector("button")
let inputField = document.querySelector("input")

const revealMessage = () => {
    setTimeout(()=> {
        message.classList.add('hide')
    }, 1000)
    message.classList.remove('hide')
}

const addMovie = (event) => {
    event.preventDefault()
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    let list = document.querySelector("ul")
    list.appendChild(movie)

    inputField.value = ""
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted!`
    revealMessage()
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} Watched!`

    } else {
        message.textContent = `${event.target.textContent} added Back!`

    }
    revealMessage()
}

// let form = document.querySelector("form")
addBtn.addEventListener('click', addMovie)