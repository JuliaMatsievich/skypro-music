import { useState } from 'react';
import * as S from './progressBar.styles'

export const ProgressBar = ({time}) => {
	const [currentTime, setCurrentTime] = useState(0);

	return (
	  <S.StyledProgressInput
		 type="range"
		 min={0}
		 max={time}
		 value={currentTime}
		 step={0.01}
		 onChange={(event) => setCurrentTime(event.target.value)}
		 $color="#B672FF"
	  />
	);
 }