import styled from "styled-components";

export const Global = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("/assets/LOGO.bmp");
  background-position: center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  height: auto;
  margin: auto;
`;

export const Title = styled.h1`
  max-width: 250px;
  margin: auto;
  padding-bottom: 15px;
`;

export const Charts = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 50px;
`;

export const ChartWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 25px;

  .recharts-wrapper {
  }
`;

export const TooltipContainer = styled.div`
  padding: 10px 25px;
  background: rgba(237, 237, 237, 0.75);
  border-radius: 8px;
  font-weight: 700;
`;
