import styled from "styled-components";
const variables = {
  /* Colors */
  bg_dark: "#18192D",

  neon_red: "#FF657F",
  neon_yellow: "#f9d423",

  white: "#EBE7E7",
  black: "#000",
  grey1: "#868f96",
  grey2: "#596164",

  /* Metrics */
  space: "20px",
  spaceXs: "5px",
  spaceSm: "10px",
  spaceMd: "25px",
  spaceLg: "40px",
  spaceXl: "80px",

  /* Fonts */
  textXs: "10px",
  textSm: "12px",
  textMd: "14px",
  textLg: "16px",
  textXlg: "18px",

  titleSm: "24px",
  titleMd: "28px",
  titleLg: "32px",
  titleXl: "38px",

  textSpacingSm: "1.2px",
  textSpacingMd: "1.8px",
};

export const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;

    &:before {
      font-size: 30px;
      color: ${variables.white};
    }
  }
  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }

  @media (max-width: 965px) {
    .slick-prev {
      left: 5px;
    }
    .slick-next {
      right: 5px;
    }
  }
`;
