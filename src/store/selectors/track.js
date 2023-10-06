import { store } from "../store"

const trackSelector = (store) => store.track;

export const allTracksSelector = (store) => {
	console.log(trackSelector(store).allTracks);
}

// const currentTrackSelector = (store) => store.currentTrack

