// This file tells the player WHAT to load and HOW to find it.

const BASE_AUDIO_URL = '/documents/audio/inverse-drum-machine/separation_outputs/';
const TABLE_HEADER = 'Model / Instrument';

const MODELS = [
    { id: "original", name: "Original Mix", dirName: "", suffix: "mix" },
    { id: "GT", name: "Ground Truth", dirName: "gt", suffix: "synth" },
    { id: "Oracle", name: "Oracle", dirName: "oracle", suffix: "masked" },
    { id: "IDM_masked", name: "IDM masked (Ours)", dirName: "9cf252ba", suffix: "masked", isOurs: true },
    { id: "IDM_synth", name: "IDM synth (Ours)", dirName: "9cf252ba", suffix: "synth", isOurs: true },
    { id: "LarsNet", name: "LarsNet", dirName: "larsnet_stereo", suffix: "synth" },
    { id: "LarsNet Mono", name: "LarsNet Mono", dirName: "larsnet_mono", suffix: "synth" },
    { id: "NMFD", name: "NMFD", dirName: "nmfd_case1a", suffix: "masked" }
];
  
// UPDATED: Added a 'color' property to each instrument for styling
const INSTRUMENTS = [
    { id: "full", name: "Full Mix", color: '#a0aec0' }, // Default color
    { id: "KD", name: "Kick", color: '#e53e3e' },
    { id: "SD", name: "Snare", color: '#dd6b20' },
    { id: "HH", name: "Hi-Hats", color: '#38a169' },
    { id: "CY", name: "Cymbals", color: '#3182ce' },
    { id: "TT", name: "Tom-Tom", color: '#805ad5' }
];
  
const TRACKS = [
    {
      id: "93",
      title: "93_hiphop_75_beat_4-4.wav, drum kit:      brooklyn (train kit)",
      baseDir: "test_train_kits/93_hiphop_75_beat_4-4_brooklyn",
      // crop: 10
    },
    {
      id: "166",
      title: "166_latin-brazilian-baiao_95_fill_4-4.wav,      drum kit: heavy (train kit)",
      baseDir: "test_train_kits/166_latin-brazilian-baiao_95_fill_4-4_heavy",
      // crop: 2
    },

    {
      id: "11",
      title: "11_rock_120_beat_4-4.wav,      drum kit: portland (train kit)",
      baseDir: "test_train_kits/11_rock_120_beat_4-4_portland",
    },
    {
      id: "7",
      title: "7_pop-groove7_138_beat_4-4.wav,      drum kit: retro rock (train kit)",
      baseDir: "test_train_kits/7_pop-groove7_138_beat_4-4_retro_rock"
      // No crop specified, will play the full track
    },
    {
      id: "73",
      title: "73_neworleans-funk_93_fill_4-4.wav,      drum kit: brooklyn (train kit)",
      baseDir: "test_train_kits/73_neworleans-funk_93_fill_4-4_brooklyn",
    },
    // Test
    {
      id: "93",
      title: "93_hiphop_75_beat_4-4.wav,      drum kit: roots (test kit)",
      baseDir: "test_test_kits/93_hiphop_75_beat_4-4_roots",
      // crop: 10
    },
    {
      id: "166",
      title: "166_latin-brazilian-baiao_95_fill_4-4.wav,      drum kit: bluebird (test kit)",
      baseDir: "test_test_kits/166_latin-brazilian-baiao_95_fill_4-4_bluebird",
      // crop: 2
    },

    {
      id: "11",
      title: "11_rock_100_beat_4-4.wav,      drum kit: detroit garage (test kit)",
      baseDir: "test_test_kits/11_rock_100_beat_4-4_detroit_garage",
    },
    {
      id: "7",
      title: "7_pop-groove7_138_beat_4-4.wav,      drum kit: bluebird (test kit)",
      baseDir: "test_test_kits/7_pop-groove7_138_beat_4-4_bluebird"
      // No crop specified, will play the full track
    },
    {
      id: "117",
      title: "117_rock_95_beat_4-4.wav,      drum kit: bluebird (test kit)",
      baseDir: "test_test_kits/117_rock_95_beat_4-4_bluebird",
    },
];

/**
 * Defines how audio paths are constructed for this project.
 * A different project would have its own version of this function.
 * @param {object} track - A track object from the TRACKS array.
 * @param {object} model - A model object from the MODELS array.
 * @param {object} instrument - An instrument object from the INSTRUMENTS array.
 * @returns {string} The full URL for the audio file.
 */
const buildAudioPath = (track, model, instrument) => {
  if (model.id === 'original') {
      return `${BASE_AUDIO_URL}${track.baseDir}/mix.wav`;
  }
  
  const fileName = `${instrument.id}_${model.suffix}.wav`;
  return `${BASE_AUDIO_URL}${track.baseDir}/${model.dirName}/${fileName}`;
};

// Export everything to be used by the main script
export { BASE_AUDIO_URL, MODELS, INSTRUMENTS, TRACKS, buildAudioPath, TABLE_HEADER };

