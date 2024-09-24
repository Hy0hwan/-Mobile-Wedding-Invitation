import React, { useEffect } from 'react';
import styled from 'styled-components';
import KakaoIcon from '../assets/imgs/kakao-icon.png'; // KakaoTalk 아이콘 이미지 경로

const Footer = () => {
  useEffect(() => {
    // Kakao SDK 초기화
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.Kakao.init('27052909e8dc72ccf5fcc28a97d070b9'); // 여기에 자신의 Kakao 앱 키를 입력하세요.
    };

    return () => {
      script.remove();
    };
  }, []);

  const handleShare = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '승원 ❤️ 소정 결혼합니다!',
          description: '우리의 결혼을 축하해주세요 🥰',
          imageUrl:
            'https://nurim-test.s3.ap-northeast-2.amazonaws.com/%EB%B0%B0%EB%84%88/KakaoTalk_Photo_2024-09-25-03-05-15.jpeg', // 여기에 자신의 이미지 URL을 입력하세요.
          link: {
            mobileWebUrl: 'https://mobile-wedding-invitation-sandy.vercel.app/', // 여기에 자신의 웹사이트 링크를 입력하세요.
            webUrl: 'https://mobile-wedding-invitation-sandy.vercel.app/',
          },
        },
      });
    }
  };

  return (
    <FooterContainer>
      <ShareButton onClick={handleShare}>
        <img src={KakaoIcon} alt="KakaoTalk Share" />
        <ButtonText>카카오톡으로 공유하기</ButtonText>
      </ShareButton>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShareButton = styled.button`
  background: #ffeb3b;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #fdd835;
    transform: scale(1.05);
  }

  img {
    width: 30px; /* 버튼 이미지 크기 조절 */
    height: auto;
    margin-right: 10px;
  }
`;

const ButtonText = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;
