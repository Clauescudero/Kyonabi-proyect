import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import styled from '@emotion/styled';
import './MusicPlayer.css'; 


const PlayerContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  color: white;
  border-radius: 2px;
  padding: 5px;
  z-index: 999;
  text-align: left;
`;
const Title = styled.h2`
  font-family: 'YourDesiredFont', sans-serif;
  font-size: 20px; /* Adjust the font size as needed 
`;

const MusicPlayer = ({ src }) => {
  return (
    <PlayerContainer style={{width:'50%', marginTop:'0px'}} className="PlayerContainer"> 
      <Title>Estudiemos con Música</Title>
      
      <ReactAudioPlayer
        src='src/Music/Lofi study with me.mp3' 
        autoPlay={true}
        controls
        style={{ width: '100%',
    }}
      />
  
    </PlayerContainer>
  );
};

export default MusicPlayer;


