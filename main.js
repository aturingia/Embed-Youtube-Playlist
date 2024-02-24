// JavaScript
function loadPlaylist() {
    var playlistURL = document.getElementById('playlistURL').value;
    var playlistID = playlistURL.split('list=')[1];

    var playerDiv = document.getElementById('player');
    playerDiv.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=' + playlistID + '&autoplay=1&loop=0&mute=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}
