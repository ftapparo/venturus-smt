import React from 'react';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MyTeams } from "./components/MyTeams";
import { PickedPlayer } from './components/PickedPlayer';
import { TopFive } from './components/TopFive';


export default function App() {
  return (
    <div>
      <Header />

      <div className='content'>
        <div className='left-container'>
          <MyTeams />
        </div>

        <div className='right-container'>
          <TopFive />
          <PickedPlayer />
        </div>
      </div>

      <Footer />
    </div>
  );
}

