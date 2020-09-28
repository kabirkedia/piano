import React, { Fragment ,useState,useEffect,Component } from 'react';
import {getKeyboardShortcutsForNote} from "./getKeyboardShortcutsForNote";
import isAccidentalNote from './isAccidentalNote';
import getNotesBetween from './getNotesBetween';
import InstrumentAudio from './InstrumentAudio';

const isRegularKey = event => {
	return !event.ctrlKey && !event.metaKey && !event.shiftKey;

};

const Instrument =({
	instrumentName,
	startNote,
	endNote,
	renderPianoKey,
	keyboardMap
}) => {
	const notes = getNotesBetween(startNote, endNote);

	const[state, setState] = useState({ 
		notesPlaying: []
	});

	useEffect(()=>{
		window.addEventListener("keydown",handleKeyDown);
		window.addEventListener("keyup" ,handleKeyUp);
	},[]);

	const getNoteFromKeyBoardKey = keyboardKey => {
		return keyboardMap[keyboardKey.toUpperCase()];
	};

	const handleKeyDown = e => {
		if(isRegularKey(e) && !e.repeat) {
			const note = getNoteFromKeyBoardKey(e.key);
			if(note) {
				setState({
					...state, notesPlaying: [...state.notesPlaying, note]});
			}
		}
	};

	const handleKeyUp = e => {
		if(isRegularKey(e) && !e.repeat) {
			const note=getNoteFromKeyBoardKey(e.key);
			if(note) {
				setState({
					...state,
					notesPlaying: state.notesPlaying.filter(
						notePlaying => notePlaying !== note
					)
				});
			}
		}
	};



	const onPlayNoteEnd = note => {
		setState({
			...state,
			notesPlaying: state.notesPlaying.filter(
				notePlaying => notePlaying !== note)
		});
	};


	const onPlayNoteStart = note => {
		setState({
			...state, notesPlaying: [...state.notesPlaying, note]});
	};
	//rendering piano keys
	

	return (
		<Fragment>
		{notes.map(note => {
			return (
				<Fragment key={note}>
				{renderPianoKey({
					note,
					isAccidentalNote: isAccidentalNote(note),
					isNotePlaying: state.notesPlaying.includes(note),
					startPlayingNote: () => onPlayNoteStart(note),
					stopPlayingNote: () => onPlayNoteEnd(note),
					keyboardShortcut: getKeyboardShortcutsForNote(keyboardMap, note)
				})}
				</Fragment>
			);

		})}

		<InstrumentAudio
		instrumentName={instrumentName}
		notes={state.notesPlaying}
		 />
		
		</Fragment>
	);
};

export default Instrument;







