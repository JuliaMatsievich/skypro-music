import {
  ALL_TRACKS,
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  PAUSE_TRACK,
  PLAY_TRACK,
  SHUFFLED_TRACKS
} from '../types/types'

export const setAllTracks = (tracks) => {
  return {
    type: ALL_TRACKS,
    payload: tracks,
  }
}

export const setCurrentTrack = (track, index) => {
  return {
    type: SET_CURRENT_TRACK,
    payload: {track, index}
  }
}

export const setPlayTrack = () => {
  return {
    type: PLAY_TRACK,
  }
}

export const setPauseTrack = () => {
  return {
    type: PAUSE_TRACK,
  }
}
export const setNextTrack = (track, index) => {
  return {
    type: NEXT_TRACK,
    payload: {track, index}
  }
}
export const setPrevTrack = (track, index) => {
  return {
    type: PREV_TRACK,
    payload: {track, index}
  }
}

export const setShuffledTracks = (tracks) => {
  return {
    type: SHUFFLED_TRACKS,
    payload: {tracks}
  }
}
