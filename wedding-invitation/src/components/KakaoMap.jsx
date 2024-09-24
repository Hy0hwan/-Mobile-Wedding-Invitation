import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  FaMapMarkerAlt,
  FaCar,
  FaSubway,
  FaBus,
  FaPhone,
} from 'react-icons/fa';
import roadImg from '../assets/imgs/roadmap.jpg'; // 약도 이미지
import pin from '../assets/imgs/pin.svg'; // 핀 이미지

const KakaoMap = () => {
  const [isMapVisible, setIsMapVisible] = useState(true); // true면 지도, false면 약도 이미지
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
          const imageSrc = pin; // 핀 이미지 URL
          const imageSize = new window.kakao.maps.Size(50, 50); // 마커 이미지 크기
          const imageOption = { offset: new window.kakao.maps.Point(27, 49) }; // 마커 이미지의 위치

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

      <ExplanContainer>
        <ExplanHeader>
          <Icon color="#f28d9b">
            <FaMapMarkerAlt />
          </Icon>{' '}
          주소
        </ExplanHeader>
        <Explan>서울시 관악구 남부순환로 1440</Explan>
        <Explan>[관악구 신림동 1485-1번지]</Explan>
        <ExplanHeader>
          <Icon color="#b6e4ff">
            <FaCar />
          </Icon>{' '}
          교통편
        </ExplanHeader>
        <ExplanWrapper>
          <Explan>자가용 :</Explan>
          <ExplanDetail>시흥 IC방향 시 유턴 / 사당 방향 시 직진</ExplanDetail>
        </ExplanWrapper>
        <ExplanWrapper>
          <Explan>
            <Icon color="#ffcc7a">
              <FaSubway /> 지하철 :
            </Icon>
          </Explan>
          <ExplanDetail>신림역 5번출구 셔틀 버스 운행</ExplanDetail>
        </ExplanWrapper>
        <ExplanWrapper>
          <Explan>
            <Icon color="#b3e5f4">
              <FaBus /> 버스 :
            </Icon>
          </Explan>
          <ExplanList>
            <ExplanDetail>500번 / 504번 / 643번 / 651번</ExplanDetail>
            <ExplanDetail>5413번 / 5528번 / 5530번 / 5535번</ExplanDetail>
            <ExplanDetail>5615번 / 5616번 / 6512번</ExplanDetail>
            <ExplanDetail>9번 / 9-3번</ExplanDetail>
            <ExplanDetail>
              정거장 : 관악구 보훈회관 (신림 푸르지오)
            </ExplanDetail>
          </ExplanList>
        </ExplanWrapper>
        <ExplanHeader>
          <Icon color="#a6d8e3">
            <FaPhone />
          </Icon>{' '}
          INFO
        </ExplanHeader>
        <ExplanDetail>TEL : 02-858-1122</ExplanDetail>
      </ExplanContainer>
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
  font-size: 22px;
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

const ExplanContainer = styled.div`
  text-align: left;
  padding: 20px 20px; /* 좌우 여백 추가 */
  background-color: #f9f9f9; /* 배경색 추가 */
  border-radius: 8px; /* 모서리 둥글게 */
`;

const ExplanHeader = styled.p`
  display: flex;
  align-items: center; /* 아이콘과 텍스트 정렬 */
  color: #4a90e2; /* 아이콘과 헤더 색상 변경 */
  font-size: 16px; /* 폰트 크기 조정 */
  margin: 20px 0 10px; /* 상단 여백과 하단 여백 조정 */
`;

const Explan = styled.p`
  color: #333;
  font-size: 14px; /* 폰트 크기 증가 */
  margin-left: 10px; /* 텍스트와 구분을 위한 여백 */
`;

const ExplanWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ExplanDetail = styled.p`
  color: #333;
  font-size: 14px; /* 폰트 크기 증가 */
  margin-left: 10px; /* 레이블과 텍스트 간의 여백 */
  flex: 1; /* 레이블과 상세 내용 사이에 여백을 추가 */
`;

const ExplanList = styled.div`
  margin-left: 10px; /* 리스트 항목과 레이블 간의 여백 */
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
  background-color: #a6d8e3; /* 파스텔 블루 */
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 25px; /* 버튼의 모서리를 둥글게 */
  cursor: pointer;
  font-size: 13px;
  font-family: 'BMJUA', sans-serif; /* 버튼에 폰트 적용 */
  transition: background-color 0.3s ease; /* 배경색 전환 효과 */

  &:hover {
    background-color: #84c1d1; /* 호버 시 더 밝은 파스텔 블루 */
  }
`;

const Toast = styled.div`
  position: fixed;
  bottom: ${({ visible }) => (visible ? '30px' : '-100px')};
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 13px;
  transition: bottom 0.3s ease, opacity 0.3s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  font-family: 'BMJUA', sans-serif;
`;

const Icon = styled.div`
  margin-right: 5px; /* 아이콘과 텍스트 간의 간격 */
  color: ${(props) => props.color}; /* 아이콘 색상 변경 */
`;
