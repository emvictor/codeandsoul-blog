import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 0;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
`;

export const Post = styled.h3`
  font-size: 1.2rem;
  text-align: center;
`;

export const Inner = styled.div`
  border: 0.5px solid black;
  border-radius: 5px;
  background: lightgray;
  padding: 1rem 0.5rem;
`;
