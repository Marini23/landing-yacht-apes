import styled from "styled-components";

/// Banner Section
export const BannerWrap = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  @media (min-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const BannerContainer = styled.section`
  position: relative;
  background-color: var(--red-color);
  border-radius: 12px;
  height: 542px;
  width: 100%;
  max-width: 464px;
  margin: 0 auto;

  @media (min-width: 768px) {
    border-radius: 16px;
    height: 421px;
    max-width: 736px;
  }

  @media (min-width: 1440px) {
    border-radius: 24px;
    height: 677px;
    max-width: 1408px;
  }
`;

export const LogoContainer = styled.a`
  width: 48px;
  height: 32px;
  position: absolute;
  top: 16px;
  left: 8px;

  @media (min-width: 768px) {
    top: 20px;
    left: 12px;
  }
  @media (min-width: 1440px) {
    width: 72px;
    height: 50px;
    top: 39px;
    left: 96px;
  }
`;

export const TextQuestion = styled.p`
  position: absolute;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: 127px;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  color: var(--text-color);
  font-family: "BiroScriptUSPlusBold";
  @media (min-width: 768px) {
    top: 124px;
    left: 72px;
    transform: none;
    width: 159px;
    font-size: 20px;
    line-height: 33px;
  }

  @media (min-width: 1440px) {
    top: 197px;
    left: 195px;
    width: 190px;
    font-size: 24px;
    line-height: 40px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 63px;
  left: 50%;
  transform: translateX(-50%);
  width: 209px;
  font-size: 44px;
  font-weight: 900;
  line-height: 44px;
  color: var(--text-color);
  font-family: "RightGroteskCompactBlack";

  @media (min-width: 768px) {
    top: 157px;
    width: 591px;
    font-size: 92px;
    line-height: 92px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 1440px) {
    top: 253px;
    width: 1019px;
    font-size: 164px;
    line-height: 164px;
  }
`;

export const TextInfo = styled.p`
  position: absolute;
  top: 115px;
  left: 50%;
  transform: translateX(-50%);
  width: 162px;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  color: var(--text-color);
  font-family: "BiroScriptUSPlusBold";
  @media (min-width: 768px) {
    top: 265px;
    left: 72px;
    transform: none;
    width: 203px;
    font-size: 20px;
    line-height: 33px;
  }

  @media (min-width: 1440px) {
    top: 431px;
    left: 315px;
    width: 243px;
    font-size: 24px;
    line-height: 40px;
  }
`;

export const TextDescription = styled.p`
  text-transform: uppercase;
  position: absolute;
  top: 481px;
  left: 50%;
  transform: translateX(-50%);
  width: 217px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: var(--text-color);
  font-family: "MessinaSansMonoSemiBold";
  text-align: center;
  @media (min-width: 768px) {
    top: 273px;
    left: 474px;
    transform: none;
    width: 190px;
    text-align: justify;
    text-indent: 80px;
  }

  @media (min-width: 1440px) {
    top: 441px;
    left: 879px;
    transform: none;
    width: 337px;
    text-indent: 50px;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const ImageApe = styled.picture`
  position: absolute;
  top: 148px;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 768px) {
    position: absolute;
    top: 35px;
    left: 206px;
    transform: none;
  }
  @media (min-width: 1440px) {
    position: absolute;
    top: 65px;
    left: 445px;
  }
`;

export const BtnMint = styled.button`
  width: 216px;
  height: 41px;
  position: absolute;
  top: 428px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--bg-button);
  border-radius: 8px;
  border: none;
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  font-family: "RightGroteskCompactBlack";
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: var(--white-color);
  }

  @media (min-width: 768px) {
    width: 190px;
    top: 345px;
    left: 474px;
    transform: none;
    border-radius: 12px;
  }

  @media (min-width: 1440px) {
    width: 337px;
    height: 70px;
    top: 526px;
    left: 879px;
    font-size: 28px;
    line-height: 34px;
  }
`;
