class Movie {
    
    #name;

    #url;

    #description;

    #poster;

    #affiche;

    constructor(movieProperties) {
        this.#name = movieProperties.name;
        this.#url = movieProperties.url;
        this.#description = movieProperties.description;
        this.#poster = movieProperties.poster;
        this.#affiche = movieProperties.affiche;
    }

    getName() {
        return this.#name;
    }

    setName(value) {
        this.#name = value;
    }

    getUrl() {
        return this.#url;
    }

    setUrl(value) {
        this.#url = name;
    }

    getDescription() {
        return this.#description;
    }

    setDescription(value) {
        this.#description = value;
    }

    getPoster() {
        return this.#poster;
    }

    setPoster(value) {
        this.#poster = value;
    }

    getAffiche() {
        return this.#affiche;
    }

    setAffiche(value) {
        this.#affiche = value;
    }
}

const movies = new Array();

function fillMovies() {
    movies.push(new Movie({name: 'Пуститися берега (2008)', url: 'movies/breaking-bad-2008/index.html', 
    description: "Волтер Вайт (Браян Кренстон) працює вчителем хімії в середній школі, живе зі своєю дружиною Скайлер і сином Волтером молодшим, \
    який хворий на дитячий параліч. Його життя сильно змінюється після того як у нього виявляють рак легень. \
    Волтер вирішує зайнятися виробництвом наркотиків, для того щоб залишити достатній спадок своїй сім'ї. \
    Він використовує свої знання для того щоб разом зі своїм колишнім учнем, Джессі Пінкманом, варити метамфетамін...",
    poster: "movies/breaking-bad-2008/poster.png", affiche: "movies/breaking-bad-2008/affiche.jpg"}));
    movies.push(new Movie({name: 'Темні води (2009)', url: 'movies/dark-waters-2009/index.html', 
    description: "У центрі подій - здібний і талановитий юрист Роберт Білотт, який спеціалізується на корпоративному праві. \
    Голоний герой стає людиною, яка розкрила давно приховану історію про забруднення навколишнього середовища однією хімічною компанією...",
    poster: "movies/dark-waters-2009/poster.webp", affiche: "movies/dark-waters-2009/affiche.jpg"}));
    movies.push(new Movie({name: 'Гра на пониження (2016)', url: 'movies/the-big-short-2016/index.html', 
    description: "Фінансова аналітика - це не тільки математичний розрахунок, графіки та огляди економічних подій. \
    Це ще щось, що не піддається логіці. Брокер, що підключив до знань інтуїцію, стає незламним. \
    Саме до цієї категорії належить група з 4 біржових гравців. Вони не знайомі між собою, \
    але зійшлися воєдино в одному - світова фінансова криза ось-ось постукає в двері багатих корпорацій. Кожен з них почав готуватися до обвалу...",
    poster: "movies/the-big-short-2016/poster.jpg", affiche: "movies/the-big-short-2016/affiche.jpg"}));
    movies.push(new Movie({name: 'Життя спочатку (2008)', url: 'movies/revolutionary-road-2008/index.html', 
    description: "Середина п’ятдесятих років, Френк і Ейпріл Вілери живуть звичайнісіньким життям у передмісті Нью-Йорка, \
    у них двоє дітей і сім років шлюбу за плечима. Начебто все непогано, але подружжя мріє вирватися зі звичної рутини і здійснити свої мрії. \
    Першим кроком на шляху до змін повинен стати переїзд у Париж. Рішення прийнято, але виявляється, що не все так просто…",
    poster: "movies/revolutionary-road-2008/poster.jpg", affiche: "movies/revolutionary-road-2008/affiche.jpg"}));
    movies.push(new Movie({name: 'Закон про дітей (2017)', url: 'movies/the-children-act-2017/index.html', 
    description: "Фіона Майє - видатний суддя Верховного суду, яка з мудрістю і співчуттям підходить до всіх своїх справах. \
    На цей раз вона змушена взяти участь в житті Адама, який хворіє на рак і відмовляється від лікування через релігійні переконання своєї сім'ї. \
    Чи зможе Фіона вплинути на хлопчика і переконати його продовжити лікування?",
    poster: "movies/the-children-act-2017/poster.jpg", affiche: "movies/the-children-act-2017/affiche.jpg"}));
}

function changePosterInterval() {
    const delay = 20000;
    let timerId = setInterval(function() {
        scrollPosterRight();
    }, delay);
}

function scrollPosterLeft() {
    if (currentFilmId > 0)
        currentFilmId--;
    else
        currentFilmId = movies.length - 1;
    changePoster();
}

function scrollPosterRight() {
    if (currentFilmId < movies.length - 1)
        currentFilmId++;
    else
        currentFilmId = 0;
    changePoster();
}

function changePoster() {
    let posterText = poster.querySelector(".poster-info-text");
    posterText.innerHTML = null;
    changePosterImage(condition);
    if (addEvent)
    {
        condition.onchange = (e) => {
            changePosterImage(e);
        };
        addEvent = false;
    }
    let url = document.createElement('a');
    url.href = movies[currentFilmId].getUrl();
    let header = document.createElement('h2');
    header.innerHTML = movies[currentFilmId].getName();
    url.appendChild(header);
    posterText.appendChild(url);
    posterText.appendChild(document.createElement('br'));
    let text = document.createElement('p');
    text.innerHTML = movies[currentFilmId].getDescription();
    posterText.appendChild(text);
}

function changePosterImage(condition) {
    if (condition.matches)
        previewImage = movies[currentFilmId].getAffiche();
    else
        previewImage = movies[currentFilmId].getPoster();
    poster.style.backgroundImage = `url(${previewImage})`;
}

let currentFilmId = 0;
let poster = document.querySelector(".poster");
fillMovies();
var condition = window.matchMedia("(max-width: 650px)");
let addEvent = true;
changePosterInterval();
