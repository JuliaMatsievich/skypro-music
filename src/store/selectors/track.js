import { store } from "../store"

export const allTracksSelector = (store) => store.audioPlayer.allTracks;
export const currentTrackSelector = (store) => store.audioPlayer.currentTrack;
export const selectIsPlaying = (store) => store.audioPlayer.isPlaying;
export const currentTrackIndexSelector = (store) => store.audioPlayer.currentTrack.id;
export const isShuffledTrackSelector = (store) => store.audioPlayer.isShuffled;
export const isLoopTrackSelector = (store) => store.audioPlayer.isLoop;






