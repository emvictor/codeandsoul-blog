import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  width: 1100px;
  padding: 1.25rem 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 1100px) {
    width: 100vw;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
  }
`;

export const Body = styled.p`
  font-size: 1rem;
  padding: 1rem 0;
  text-align: center;
  @media screen and (max-width: 1100px) {
    padding: 0.5rem;
    font-size: 1.025rem;
  }
`;

export const Container = styled.div`
  margin: 0.5rem 0;
  @media screen and (max-width: 1100px) {
    width: 100vw;
  }
`;
