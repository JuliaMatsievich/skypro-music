import { store } from "../store"

export const allTracksSelector = (store) => store.audioPlayer.allTracks
export const currentTrackSelector = (store) => store.audioPlayer.currentTrack
export const selectIsPlaying = (store) => store.audioPlayer.isPlaying


