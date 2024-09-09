import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import markimg from '../assets/imgs/mark.png';
import roadImg from '../assets/imgs/roadmap.jpg'; // 약도 이미지

const KakaoMap = () => {
  const [isMapVisible, setIsMapVisible] = useState(true); // true면 지도, false면 약도 이미지

  useEffect(() => {
    if (isMapVisible) {
      // 카카오맵 API 로드
      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=c2a7efad4c20eb7a22a24670f5aee20d&autoload=false`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById('map');
          const options = {
            center: new window.kakao.maps.LatLng(37.480789, 126.910581),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);

          // 커스텀 이미지로 마커 생성
          const imageSrc = markimg; // 마커 이미지 URL
          const imageSize = new window.kakao.maps.Size(64, 64); // 마커 이미지 크기
          const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커 이미지의 위치

          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          );
          const markerPosition = new window.kakao.maps.LatLng(
            37.480789,
            126.910581
          ); // 마커 위치

          // 마커 생성
          const marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage, // 커스텀 이미지 설정
          });

          // 지도에 마커 표시
          marker.setMap(map);
        });
      };

      return () => script.remove();
    }
  }, [isMapVisible]); // isMapVisible이 변경될 때마다 실행

  return (
    <Container>
      {/* 버튼 추가 */}
      <ButtonContainer>
        <Button onClick={() => setIsMapVisible(true)}>지도로 보기</Button>
        <Button onClick={() => setIsMapVisible(false)}>약도로 보기</Button>
      </ButtonContainer>

      {/* 지도 또는 약도 이미지 표시 */}
      {isMapVisible ? (
        <MapContainer id="map" />
      ) : (
        <RoadMapImage src={roadImg} alt="약도 이미지" />
      )}
    </Container>
  );
};

export default KakaoMap;

const Container = styled.div`
  width: 100%;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const RoadMapImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;
