import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 2rem;
`;

export const Text = styled.h1`
  color: white;
  font-size: 2rem;
  margin-bottom: 1.25rem;
`;

export const Post = styled.h3`
  color: white;
  margin: 35px;
  font-size: 1.25rem;
`;

export const Inner = styled.div`
  border: 1px solid white;
`;
