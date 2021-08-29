import styled from '@emotion/styled';

export const BoardCell = styled.div`
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.25s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.board[0]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAccent};
    color: ${({ theme }) => theme.colors.secondaryAccent};
  }

  ${({ theme }) => theme.media.breakpoints.s} {
    font-size: ${({ theme }) => theme.typography.board[1]};
  }
`;
