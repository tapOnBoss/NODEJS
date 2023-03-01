const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const results = document.querySelector('#search-results');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchQuery = input.value.trim();
    if (searchQuery.length === 0) {
        return;
    }
    try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track`);
        if (!response.ok) {
            throw new Error('Failed to fetch search results');
        }
        const data = await response.json();
        const tracks = data.tracks.items;
        results.innerHTML = '';
        if (tracks.length === 0) {
            results.innerHTML = '<li>No results found</li>';
        } else {
            tracks.forEach((track) => {
                const li = document.createElement('li');
                li.textContent = `${track.artists[0].name} - ${track.name}`;
                results.appendChild(li);
            });
        }
    } catch (error) {
        console.error(error);
        results.innerHTML = '<li>Failed to fetch search results</li>';
    }
});
