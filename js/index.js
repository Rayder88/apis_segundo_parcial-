const jokeContainer = document.getElementById('joke-container');
const getJokeButton = document.getElementById('get-joke-btn');

getJokeButton.addEventListener('click', fetchJoke);

function fetchJoke () {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            jokeContainer.innerHTML = `<p><em>${data.value}</em></p>`;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        })
}