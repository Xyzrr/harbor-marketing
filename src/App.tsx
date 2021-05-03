import * as S from "./App.styles";
import "./App.css";
import "normalize.css";
import macLogo from "./platform-logo-macos.svg";

function App() {
  return (
    <S.Wrapper>
      <S.GlobalStyles />
      <S.Container>
        <S.Heading>Slogan TBD.</S.Heading>
        <S.DownloadButton
          href="https://github.com/Xyzrr/virtual-office/releases/latest/Harbor-0.1.6.dmg"
          download
        >
          <S.PlatformLogo src={macLogo} />
          Download for MacOS
        </S.DownloadButton>
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
