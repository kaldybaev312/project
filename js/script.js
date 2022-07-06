const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const movieList = document.querySelector('.promo__interactive-list');

movieDB.movies.sort();

function creatMovieList() {
    movieList.innerHTML = ''

    movieDB.movies.forEach((film) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${film}
        <div class="delete"></div>
        </li>
        `
    })
}
creatMovieList()

const addForm = document.querySelector('.add');
const addInput = document.querySelector('.adding__input');

addForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newFilm = addInput.value 

    movieDB.movies.push(newFilm)
    movieDB.movies.sort()

    creatMovieList()
})