import React, { useEffect, useState } from 'react';
import AudioPlayer from './AudioFiles/AudioPlayer';

const InstrumentAudio = ({instrumentName, notes}) => {
	const[instrumentPlayer,setInstrumentPlayer] = useState(null);
	useEffect(() => {
		setInstrumentPlayer(AudioPlayer);
	},[]);

	useEffect(() => {
		if(instrumentPlayer) {
			setInstrument();
			playnotes();
		}
	},[instrumentPlayer]);
	

	useEffect(() => {
		if(notes && notes.length > 0) {
			playnotes();
		}
	},[notes]);
	
	const setInstrument = () => {
		instrumentPlayer.setInstrument(instrumentName);
	}

	const playnotes = () => {
		if(instrumentPlayer) {
			instrumentPlayer.playNote(notes[0]);
		}
	};
	return null;
};

export default InstrumentAudio;
