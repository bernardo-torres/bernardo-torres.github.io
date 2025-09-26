import { AudioTrackPlayer } from './AudioPlayerComponent.js';
import { MODELS, INSTRUMENTS, TRACKS, buildAudioPath } from './audioplayerconfig.js';
import { BASE_AUDIO_URL } from './audioplayerconfig.js';

document.addEventListener('DOMContentLoaded', () => {
    // Find the wrapper on the page. If it doesn't exist, do nothing.
    const playersWrapper = document.getElementById('players-wrapper');
    if (!playersWrapper) return;

    // --- Global State ---
    const globalState = {
        baseAudioUrl: BASE_AUDIO_URL,
        sync: true, loop: true, volume: 0.8, activePlayer: null,
        buildAudioPath: buildAudioPath
    };

    // --- UI Elements & Event Listeners ---
    document.getElementById('stopAllButton')?.addEventListener('click', () => globalState.activePlayer?.stopAudio());
    document.getElementById('syncCheckbox')?.addEventListener('change', (e) => globalState.sync = e.target.checked);
    document.getElementById('loopCheckbox')?.addEventListener('change', (e) => {
        globalState.loop = e.target.checked;
        const audio = globalState.activePlayer?.audioObjects[globalState.activePlayer.currentlyPlayingAudioId];
        if (audio) audio.loop = globalState.loop;
    });
    document.getElementById('volumeSlider')?.addEventListener('input', (e) => {
        globalState.volume = parseFloat(e.target.value);
        const audio = globalState.activePlayer?.audioObjects[globalState.activePlayer.currentlyPlayingAudioId];
        if (audio) audio.volume = globalState.volume;
    });

    // --- Initialize a player component for each track in the config ---
    TRACKS.forEach(trackConfig => {
        const player = new AudioTrackPlayer(trackConfig, MODELS, INSTRUMENTS, globalState);
        player.render(playersWrapper);
    });
});
