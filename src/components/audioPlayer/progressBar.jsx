import { useEffect, useState, useRef } from 'react';
import * as S from './progressBar.styles';
import { getTimeInMinutes } from '../../helpFunctions';

export const ProgressBar = ({audioRef, isPlaying, currentTime, setCurrentTime, intervalRef,currentTrack,duration}) => {

	const handleSeek = (e) => {
		clearInterval(intervalRef.current)
		audioRef.current.currentTime = e.target.value;
		setCurrentTime(e.target.value);
	};
  
	useEffect(() => {
		if(isPlaying) {
			intervalRef.current = setInterval(() => {
				setCurrentTime(audioRef.current.currentTime)
			},[100])
		}
	},[currentTime]) 


	return (
		<>
		<S.TimeTrack>{currentTime} / {duration} </S.TimeTrack>
	  <S.StyledProgressInput
		 type="range"
		 min={0}
		 max={duration}
		 value={currentTime}
		 step={0.01}
		 onChange={(e) => handleSeek(e)}
		 $color="#B672FF"
	  />
	  </>
	);
 }