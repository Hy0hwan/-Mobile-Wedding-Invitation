import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import musicOnIcon from '../assets/imgs/music_01_on.png'; // 재생 중일 때 아이콘
import musicOffIcon from '../assets/imgs/music_01_off.png'; // 정지 중일 때 아이콘
import Arrow from '../assets/pigArrow.png';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      if (!hasPrompted) {
        setHasPrompted(true); // 처음 재생 시 메시지 표시
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Audio ref={audioRef} src="/I_Will.mp3" preload="auto" />
      <PlayPauseButton onClick={togglePlayPause}>
        <img src={isPlaying ? musicOnIcon : musicOffIcon} alt="Play/Pause" />
      </PlayPauseButton>
      <PromptText>
        {!hasPrompted && !isPlaying ? (
          <>
            {'버튼을 클릭하면 음악이 재생됩니다 '}
            <ArrowImage src={Arrow} alt="화살표" />
          </>
        ) : (
          ''
        )}
      </PromptText>
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

const PromptText = styled.p`
  position: fixed;
  top: 40px; /* 버튼 아래 위치 조정 */
  right: 55px;
  color: #333; /* 텍스트 색상 */
  font-size: 16px; /* 텍스트 크기 */
  z-index: 1000;
  padding: 5px; /* 패딩 */
  border-radius: 5px; /* 모서리 둥글게 */
`;

const ArrowImage = styled.img`
  width: 45px; /* 화살표 이미지 크기 조절 */
  height: auto;
  margin-left: 5px; /* 텍스트와 화살표 사이 간격 추가 */
`;
