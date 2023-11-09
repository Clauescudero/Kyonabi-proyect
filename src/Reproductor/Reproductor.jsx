import React, { useState } from 'react';

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const songs = [
    'Music/Magiksolo - Shinjuku.mp3',
    'Music/Lalinea - Red Gamba.mp3',
    'Music/Lalinea - Will You Play with Me.mp3',
    'Music/Novembers - Come Over.mp3',
  ];

  const changeSong = (direction) => {
    if (direction === 'next') {
      setCurrentSong((prevSong) => (prevSong + 1) % songs.length);
    } else {
      setCurrentSong((prevSong) => (prevSong - 1 + songs.length) % songs.length);
    }
  };

  return (
    <div>
      <h2>Reproductor de Música</h2>
      <audio controls id="Reproductor" autoPlay>
        <source src={songs[currentSong]} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <div>
        <button onClick={() => changeSong('prev')}>Anterior</button>
        <button onClick={() => changeSong('next')}>Siguiente</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
