import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgba(0, 0, 255, 0.3);
  margin-bottom: 5rem;
  @media screen and (max-width: 1100px) {
    margin-bottom: 1rem;
  }
`;

export const Logo = styled.img`
  height: 4rem;
  border-radius: 50%;
  margin: 0.5rem 0.5rem;
  @media screen and (max-width: 1100px) {
    height: 2.75rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  margin-left: 1rem;
`;

