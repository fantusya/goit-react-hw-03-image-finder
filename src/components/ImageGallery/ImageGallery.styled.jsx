import styled from 'styled-components';

export const ImagesList = styled.ul`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[3]}px;
`;
