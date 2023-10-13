import { Player } from '../../components/audioPlayer/audioPlayer'
import { TrackList } from '../../components/trackList/trackList'
import { ErrorMessage } from '../../components/errors/error'
import { useContext, useState } from 'react'
import { UserContext } from '../../App'
import { useSelector } from 'react-redux'
import { currentTrackSelector } from '../../store/trackSlice'

export const MainPage = () => {
 const { allTracksError } = useContext(UserContext)

//  const currentTrack = useSelector(currentTrackSelector)

 return (
  <>
        {allTracksError ? (
          <ErrorMessage allTracksError={allTracksError} />
        ) : (
          <TrackList />
        )}
      {/* {Object.keys(currentTrack).length ? (
        <Player />
      ) : null} */}
    </>
  )
}
