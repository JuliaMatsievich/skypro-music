import './App.css';
import { Player } from './components/audioPlayer/audioPlayer';
import { NavMenu } from './components/navMenu/navMenu';
import { TrackList } from './components/trackList/trackList';
import { SideBar } from './components/sideBar/sideBar';

function App() {
  return (
         <div className="wrapper">
          <div className="container">
            <main className="main">
          <NavMenu />
          <TrackList />
          <SideBar/>
            </main>
          <Player />
            <footer className="footer"></footer>
          </div>
        </div>
  );
}

export default App;
