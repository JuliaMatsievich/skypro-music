import './App.css';
import { Player } from './components/audioPlayer/audioPlayer';
import { NavMenu } from './components/navMenu/navMenu';
import { TrackList } from './components/trackList/trackList';
import { SideBar } from './components/sideBar/sideBar';
import { useState, useEffect } from 'react';

import { SkeletonTrackList } from "./components/skeleton/skeletonTrackList";
import { SkeletonAudioPlayer } from "./components/skeleton/skeletonAudioPlayer";
import { SkeletonSideBar } from "./components/skeleton/skeletonSideBar";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect (() => {
    setTimeout(() => {
      setLoading(!isLoading);
    }, 5000)
  },[])

  return (
         <div className="wrapper">
          <div className="container">
            <main className="main">
          <NavMenu />
          {isLoading ? <SkeletonTrackList/> : <TrackList />}
          {isLoading ? <SkeletonSideBar/> : <SideBar/>}
            </main>
          {isLoading ? <SkeletonAudioPlayer/> : <Player /> }
            <footer className="footer"></footer>
          </div>
        </div>
  );
}

export default App;
