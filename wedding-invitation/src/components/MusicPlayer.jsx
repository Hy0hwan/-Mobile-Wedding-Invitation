import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import musicOnIcon from '../assets/imgs/music_01_on.png'; // 재생 중일 때 아이콘
import musicOffIcon from '../assets/imgs/music_01_off.png'; // 정지 중일 때 아이콘

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Audio ref={audioRef} src="/I_Will.mp3" preload="auto" />
      <PlayPauseButton onClick={togglePlayPause}>
        <img src={isPlaying ? musicOnIcon : musicOffIcon} alt="Play/Pause" />
      </PlayPauseButton>
    </div>
  );
};

export default MusicPlayer;

const Audio = styled.audio`
  display: none;
`;

const PlayPauseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;

  img {
    width: 40px; /* 버튼 이미지 크기 조절 */
    height: auto;
  }
`;
