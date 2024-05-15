document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause-button');
    const stopButton = document.getElementById('stop-button');
    const nextButton = document.getElementById('next-button');

    let isPlaying = false;

    playPauseButton.addEventListener('click', function() {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseButton.textContent = 'Play';
        } else {
            audioPlayer.play();
            playPauseButton.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    stopButton.addEventListener('click', function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playPauseButton.textContent = 'Play';
        isPlaying = false;
    });

    nextButton.addEventListener('click', function() {
        // Add functionality to play the next track
        // For simplicity, you can just change the 'src' attribute of the audio element
        // Example: audioPlayer.src = 'next_song.mp3';
    });
});
