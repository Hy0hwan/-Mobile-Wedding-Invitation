import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import markimg from '../assets/imgs/mark.png';
import roadImg from '../assets/imgs/roadmap.jpg'; // 약도 이미지

const KakaoMap = () => {
  const [isMapVisible, setIsMapVisible] = useState(false); // true면 지도, false면 약도 이미지
  const mapUrl = '서울특별시 관악구 신림동 1485-1번지';
  const [copied, setCopied] = useState(false);

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

  const handleCopy = (accountNumber) => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // 3초 후 복사 상태 초기화
      })
      .catch((err) => {
        console.error('복사 실패:', err);
      });
  };

  return (
    <Container>
      <Header>오시는길</Header>
      <HeadEn>Navigation</HeadEn>
      {isMapVisible ? (
        <MapContainer id="map" />
      ) : (
        <RoadMapImage src={roadImg} alt="약도 이미지" />
      )}
      <ButtonContainer>
        <Button onClick={() => setIsMapVisible(true)}>지도로 보기</Button>
        <Button onClick={() => setIsMapVisible(false)}>약도로 보기</Button>
        <Button onClick={() => handleCopy(mapUrl)}>주소 복사</Button>
      </ButtonContainer>
      <Toast visible={copied}>클립보드에 복사되었습니다!</Toast>
    </Container>
  );
};

export default KakaoMap;

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Header = styled.p`
  text-align: center;
  font-size: 24px;
  color: #333;
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 10px;
  font-weight: bold;
`;

const HeadEn = styled.p`
  font-family: 'Blacksword', cursive;
  font-size: 14px;
  margin-bottom: 30px;
  margin-top: -15px;
  color: #bbb;
  text-align: center;
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
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #4a90e2; /* 더 세련된 파란색 */
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 25px; /* 버튼의 모서리를 둥글게 */
  cursor: pointer;
  font-size: 13px;
  font-family: 'BMJUA', sans-serif; /* 버튼에 폰트 적용 */
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #357abd; /* 버튼 호버 색상 */
    transform: scale(1.05); /* 버튼 호버 시 확대 효과 */
  }
`;

const Toast = styled.div`
  position: fixed;
  bottom: ${({ visible }) => (visible ? '30px' : '-100px')}; /* 토스트 위치 */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 13px;
  transition: bottom 0.3s ease-in-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)}; /* 나타날 때 투명도 */
`;
