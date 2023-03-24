import styled from "styled-components";

const HeroWrapped = styled.div`
  position: relative;
  height: 600px;
  width: 100vw;
  @media screen and (min-width: 800px) {
    height: 700px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Text = styled.div`
  @font-face {
    font-family: elegantFont;
    src: url(/TheChamidPersonalUseOnly-J63a.ttf);
  }

  position: absolute;
  top: 40%;
  right: 20%;
  font-size: 1.9rem;
  z-index: 2;
  font-family: "elegantFont", sans-serif; ;
`;
const Paragraf = styled.p`
  font-style: italic;
`;

const Hero = () => {
  return (
    <HeroWrapped>
      <Overlay />
      <Image
        src="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/11/02114003/whiskey-cocktails-2-1600x900.jpeg"
        alt="hero image"
      />
      <Text>
        <h1> Cocktails</h1>
        <Paragraf>...drink responsibly</Paragraf>
      </Text>
    </HeroWrapped>
  );
};

export default Hero;
