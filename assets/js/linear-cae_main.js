import { AudioTrackPlayer } from './AudioPlayerComponent.js';
import { MODELS, INSTRUMENTS, TRACKS, buildAudioPath, BASE_AUDIO_URL, TABLE_HEADER } from './linear-cae_config.js';

document.addEventListener('DOMContentLoaded', () => {
    const playersWrapper = document.getElementById('players-wrapper');
    if (!playersWrapper) return;

    const globalState = {
        baseAudioUrl: BASE_AUDIO_URL,
        sync: true, loop: true, volume: 0.8, activePlayer: null,
        buildAudioPath: buildAudioPath,
        tableHeader: TABLE_HEADER
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
        
        // **DEBUGGING LINE ADDED HERE**
        // This will log the path of every audio file as the table is built.
        console.log(`--- Debug paths for track: ${trackConfig.title} ---`);
        MODELS.forEach(model => {
            INSTRUMENTS.forEach(instrument => {
                const audioPath = buildAudioPath(trackConfig, model, instrument);
                console.log(`Path for [${model.name}, ${instrument.name}]: ${audioPath}`);
            });
        });

        const player = new AudioTrackPlayer(trackConfig, MODELS, INSTRUMENTS, globalState);
        player.render(playersWrapper);
    });
});