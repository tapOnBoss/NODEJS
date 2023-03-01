const SpotifyWebApi = require('spotify-web-api-js');

// Replace these with your own credentials
const clientId = 'your_client_id';
const clientSecret = 'your_client_secret';
const redirectUri = 'http://localhost:3000/callback';

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: redirectUri,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

// Authenticate with Spotify
spotifyApi.setAccessToken('your_access_token');

// Play a track from Spotify
spotifyApi.play({
    uris: ['spotify:track:5jafMI8FLibnjkYTZ33m0c']
}).then((res) => {
    console.log('Track is playing.');
}).catch((err) => {
    console.log('Error occurred while playing track:', err);
});


const SpotifyWebApi = require('spotify-web-api-node');

async function authorizeSpotify() {
    try {
        const data = await spotifyApi.clientCredentialsGrant();
        console.log(`Access token: ${data.body['access_token']}`);
        spotifyApi.setAccessToken(data.body['access_token']);
    } catch (err) {
        console.log('Something went wrong:', err);
    }
}

async function playSpotifyAudio(searchQuery) {
    try {
        const searchResults = await spotifyApi.searchTracks(searchQuery);
        const trackUri = searchResults.body.tracks.items[0].uri;
        const options = { 
            auto_play: true,
            show_playlist: false,
            hide_cover: true,
            show_user: false,
            callback: null
        };
        const iframe = `<iframe src="https://open.spotify.com/embed/track/${trackUri}" 
        width="300" height="80" frameborder="0"
        allowtransparency="true" allow="encrypted-media"
        title="${searchQuery}"></iframe>`;
        return { success: true, message: iframe };
    } catch (err) {
        console.log('Something went wrong:', err);
        return { success: false, message: 'Unable to play audio' };
    }
}

module.exports = { authorizeSpotify, playSpotifyAudio };
