import * as S from './audioPlayer.styles'
import { useRef, useState, useEffect, useContext } from 'react'
import { ProgressBar } from './progressBar'
import { UserContext } from '../../App'

export const Player = ({ isLoading, currentTrack }) => {
  let audioRef = useRef(new Audio(currentTrack.track_file))

  const [isPlaying, setIsPlaying] = useState(false)

  const [isLoop, setIsLoop] = useState(false)

  const [duration, setDuration] = useState(0)

  const [currentTime, setCurrentTime] = useState(0)

  const [volume, setVolume] = useState(0.5)

  const intervalRef = useRef()

  const handlePlay = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handlePause = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause()
    } else {
      handlePlay()
    }
  }

  const handleLoop = () => {
    audioRef.current.loop = true
    setIsLoop(true)
  }

  const handleNotLoop = () => {
    audioRef.current.loop = false
    setIsLoop(false)
  }

  const toggleLoop = isLoop ? handleNotLoop : handleLoop

  const handleBackward = () => {
    alert('Ещё не реализовано')
  }

  const handleForward = () => {
    alert('Ещё не реализовано')
  }

  const handleShuffle = () => {
    alert('Ещё не реализовано')
  }

  const handleVolume = (e) => {
    audioRef.current.volume = e.target.value
    setVolume(e.target.value)
  }

  useEffect(() => {
    if (audioRef.current.currentTime > 0) {
      audioRef.current = new Audio(currentTrack.track_file)
    }
    handlePlay()
    return () => {
      if (audioRef.current && audioRef.current.currentTime > 0) {
        handlePause()
        clearInterval(intervalRef.current)
      }
    }
  }, [currentTrack])

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime)
    setDuration(audioRef.current.duration)
  }

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
    audioRef.current.addEventListener('loadedmetadata', handleTimeUpdate)
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
        audioRef.current.removeEventListener('loadedmetadata', handleTimeUpdate)
      }
    }
  }, [currentTrack])

  return (
    <>
      <S.AudioTag controls ref={audioRef}>
        <source src={currentTrack.track_file} type="audio/mpeg" />
      </S.AudioTag>
      <S.Bar>
        <S.BarContent>
          <ProgressBar
            audioRef={audioRef}
            isPlaying={isPlaying}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            intervalRef={intervalRef}
          ></ProgressBar>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBtnPrev>
                  <S.PlayerBtnPrevSvg alt="prev" onClick={handleBackward}>
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerBtnPrevSvg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay>
                  <S.PlayerBtnPlaySvg alt="play" onClick={handlePlayPause}>
                    <use
                      xlinkHref={
                        isPlaying
                          ? 'img/icon/sprite.svg#icon-pause'
                          : 'img/icon/sprite.svg#icon-play'
                      }
                    ></use>
                  </S.PlayerBtnPlaySvg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext>
                  <S.PlayerBtnNextSvg alt="next" onClick={handleForward}>
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerBtnNextSvg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat className="_btn-icon">
                  <S.PlayerBtnRepeatSvg alt="repeat" onClick={toggleLoop}>
                    <use
                      xlinkHref={
                        isLoop
                          ? 'img/icon/sprite.svg#icon-repeatactive'
                          : 'img/icon/sprite.svg#icon-repeat'
                      }
                    ></use>
                  </S.PlayerBtnRepeatSvg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle className="_btn-icon">
                  <S.PlayerBtnShuffleSvg alt="shuffle" onClick={handleShuffle}>
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </S.PlayerBtnShuffleSvg>
                </S.PlayerBtnShuffle>
              </S.PlayerControls>

              <S.TrackPlay>
                {isLoading ? (
                  <S.TrackPlayContain>
                    <S.SkeletonTrackPlayImage></S.SkeletonTrackPlayImage>
                    <S.SkeletonTrackPlayAuthor></S.SkeletonTrackPlayAuthor>
                    <S.SkeletonTrackPlayAlbum></S.SkeletonTrackPlayAlbum>
                  </S.TrackPlayContain>
                ) : (
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      <S.TrackPlaySvg alt="music">
                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                      </S.TrackPlaySvg>
                    </S.TrackPlayImage>

                    <S.TrackPlayAuthor>
                      <S.TrackPlayAuthorLink href="http://">
                        {currentTrack.name}
                      </S.TrackPlayAuthorLink>
                    </S.TrackPlayAuthor>

                    <S.TrackPlayAlbum className="track-play__album">
                      <S.TrackPlayAlbumLink href="http://">
                        {currentTrack.author}
                      </S.TrackPlayAlbumLink>
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>
                )}

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike className="_btn-icon">
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDisLike className="_btn-icon">
                    <S.TrackPlayDisLikeSvg
                      className="track-play__dislike-svg"
                      alt="dislike"
                    >
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDisLikeSvg>
                  </S.TrackPlayDisLike>
                </S.TrackPlayLikeDis>
              </S.TrackPlay>
            </S.BarPlayer>
            <S.VolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress className="_btn">
                  <S.VolumeProgressLine
                    className="_btn"
                    type="range"
                    name="range"
                    min={0}
                    max={1}
                    value={volume}
                    step={0.01}
                    onChange={(e) => handleVolume(e)}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.VolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  )
}
