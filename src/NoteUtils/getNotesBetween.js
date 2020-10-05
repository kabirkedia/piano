import NOTES from '../AudioFiles/note';

export default function getNotesBetween(startNote, endNote) {
	const startingNode = NOTES.indexOf(startNote);
	const endingNode = NOTES.lastIndexOf(endNote);
	return NOTES.slice(startingNode, endingNode+1);
}
