import styled from "styled-components";

export default function TextSection() {
  return (
    <Wrapper>
      <Content>
        <Title>
          Welcome, <br></br>
          I'm Marcus Norman
        </Title>
        <Description>
          I'm a Web developer primarily focused on frontend development.
        </Description>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  text-align: left;
  margin: 0 auto;
`;

const Content = styled.div`
  max-width: max-content;
  margin: 0 auto;
  display: block;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
`;

const Description = styled.p`
  max-width: 340px;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
`;
