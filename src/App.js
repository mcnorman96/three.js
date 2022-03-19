import "./styles.css";
import styled from "styled-components";
import Introduction from "./components/Introduction";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Wrapper className="App">
      <Sidebar />
      <Introduction />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(37.94deg,rgb(16 8 74) 16.94%,#83a4ff 87.08%);
  min-height: 100vh;
  canvas {
    height: 500px;
  }
`;
