
const BASE_AUDIO_URL = '/documents/audio/linear-cae/'; // <-- IMPORTANT: Change this to the base URL for your new project's audio files.
const TABLE_HEADER = 'Operation / Model';

const MODELS = [
    // This is a dummy entry for the main waveform. The component expects it.
    { id: "original", name: "Original Mix (for setup)" },
    { id: "ae_mix",      name: "Autoencoded Mix \\(D(E(\\text{mix}))\\)" },
    { id: "additivity",  name: "Latent addition \\(Dec(E(\\text{Vocals}) + E(\\text{Drums}) + E(\\text{Bass}) + E(\\text{Other}))\\)" },
    { id: "gt_vocals",   name: "Original Vocals" },
    { id: "sep_vocals",  name: "Separated Vocals \\(D(E(\\text{mix}) - E(\\text{accomp}))\\)" },
    { id: "scale_0_1",   name: "Latent Scaling \\(D(0.1 \\cdot E(\\text{vocals}))\\)" },
    { id: "scale_0_5",   name: "Latent Scaling \\(D(0.5 \\cdot E(\\text{vocals}))\\)" },
    { id: "scale_2_0",   name: "Latent Scaling \\(D(2.0 \\cdot E(\\text{vocals}))\\)" },
];

// 3. INSTRUMENTS now define the ROWS of the table. Each is a specific audio output.
const INSTRUMENTS = [
    { id: "full", name: "Full Mix (for setup)" },
    { id: "stable-audio-vae",  name: "Stable Audio VAE",color: '#e53e3e' },
    { id: "m2l",               name: "M2L",       color: '#38a169' },
    { id: "lin-cae",           name: "Linear CAE (ours)",      color: '#3182ce' },
];

// 4. List the tracks you want to feature in the demo.
const TRACKS = [
    {
      id: "aljames",
      title: "Track: Al James - Schoolboy Fascination",
      baseDir: "Al_James_-_Schoolboy_Facination",
    },
    {
      id: "zeno",
      title: "Track: Zeno - Signs",
      baseDir: "Zeno - Signs",
    },
    {
      id: "vane-soeasy",
      title: "Track: Cristina Vane - So Easy",
      baseDir: "Cristina Vane - So Easy"
    },
];

const buildAudioPath = (track, model, instrument) => {
    const baseUrl = `${BASE_AUDIO_URL}${track.baseDir}`;

    // Special case for the main waveform setup.
    // The component asks for model='original' and instrument='full'.
    // We give it the ground truth mix file.
    if (model.id === 'original' && instrument.id === 'full') {
        return `${baseUrl}/gt_mix.wav`;
    }

    // When the component asks for the "Ground Truth" column...
    if (instrument.id === 'ground_truth') {
        // ...the path is in the ground_truth folder, and the filename is the operation's id.
        // e.g., /.../Al_James.../ground_truth/gt_vocals.wav
        return `${baseUrl}/ground_truth/${model.id}.wav`;
    }
    
    // For all other columns (lin-cae, m2l, etc.)...
    // ...the path is folder `instrument.id` and filename is `model.id`.
    // e.g., /.../Al_James.../lin-cae/ae_mix.wav
    return `${baseUrl}/${instrument.id}/${model.id}.wav`;
};

// Export everything to be used by the main script.
export { BASE_AUDIO_URL, MODELS, INSTRUMENTS, TRACKS, buildAudioPath, TABLE_HEADER };