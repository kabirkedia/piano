
const TONES = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const Octave_numbers = [1,2,3,4,5,6,7];

export default Octave_numbers.reduce((notes,octavenumber) => {
	const notesInOctave = TONES.map(tone => `${tone}${octavenumber}` );
	return [...notes, ...notesInOctave];
},[]);
