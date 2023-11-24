import { useDispatch, useSelector } from 'react-redux'
import {
  favoritePlaylistSelector,
  setFavoritePlaylist,
} from '../../store/trackSlice'
import { useEffect, useState } from 'react'
import { TrackList } from '../../components/trackList/trackList'
import {useLazyGetFavoriteTracksQuery} from '../../services/trackApi'
import { HeaderTrackList } from '../../components/headerTrackListAndSearch/headerTrackList'
import { searchMusic } from '../../helpers/searchFunc'

export const Favorites = () => {
  const dispatch = useDispatch()
  const [fetchFavTracks, { data, isError, error }] =
    useLazyGetFavoriteTracksQuery()

  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchFavTracks().unwrap()
    .then((data) => {
      dispatch(setFavoritePlaylist(data))
    })
  }, [data])

  const favTracks = useSelector(favoritePlaylistSelector)

  return (
    <>
      <HeaderTrackList title={'Мои треки'} setSearch={setSearch} />
      {search && searchMusic(data, search).length === 0 ? (
        <h2>Ничего не найдено</h2>
      ) : (
        <TrackList tracks={search ? searchMusic(data, search) : favTracks} />
      )}
    </>
  )
}
