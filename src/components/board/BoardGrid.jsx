import styled from '@emotion/styled';

export const BoardGrid = styled.div`
  display: inline-grid;
  grid-gap: 1px;
  grid-template: repeat(${({ numCells }) => numCells}, 1fr) / repeat(
      ${({ numCells }) => numCells},
      1fr
    );
  width: 300px;
  height: 300px;

  ${({ theme }) => theme.media.breakpoints.s} {
    width: 450px;
    height: 450px;
  }
`;
