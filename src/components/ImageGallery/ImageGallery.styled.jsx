import styled from 'styled-components';

export const ImagesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[3]}px;
  /* justify-content: space-evenly; */
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  list-style: none;
`;
