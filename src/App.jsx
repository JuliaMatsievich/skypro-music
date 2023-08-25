import './App.css';
import { Player } from './components/audioPlayer/audioPlayer';
import { NavMenu } from './components/navMenu/navMenu';
import { TrackList } from './components/trackList/trackList';
import { SideBar } from './components/sideBar/sideBar';
import { useState, useEffect } from 'react';

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
          <TrackList  isLoading={isLoading}/>
          <SideBar isLoading={isLoading}/>
            </main>
          <Player isLoading={isLoading}/>
            <footer className="footer"></footer>
          </div>
        </div>
  );
}

export default App;
