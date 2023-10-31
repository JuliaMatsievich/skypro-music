import { useEffect } from 'react'
import * as S from './progressBar.styles'
import { getTimeInMinutes } from '../../helpers/helpFunctions'

export const ProgressBar = ({
  audioRef,
  isPlaying,
  currentTime,
  setCurrentTime,
  duration,
  intervalRef,
}) => {

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value
    setCurrentTime(e.target.value)
  }

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(audioRef?.current.currentTime)
      }, [100])
    }
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [currentTime])

  return (
    <>
      <S.TimeTrack>
        {getTimeInMinutes(currentTime)} / {getTimeInMinutes(duration)}{' '}
      </S.TimeTrack>
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
  )
}
