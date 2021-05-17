import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    * {
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
  background: #222;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 64px;
  display: flex;
  flex-direction: column;
  padding-top: 28vh;
`;

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 32px;
`;

export const PlatformLogo = styled.img`
  filter: invert(100%);
  width: 26px;
  margin-right: 16px;
  margin-left: -4px;
`;

export const DownloadButton = styled.a`
  display: flex;
  width: fit-content;
  align-items: center;
  background: white;
  padding: 16px 32px;
  border-radius: 4px;
  color: black;
  text-decoration: none;
  font-size: 32px;
  font-weight: 600;
  &:hover {
    background: #f6f6f6;
  }
`;
