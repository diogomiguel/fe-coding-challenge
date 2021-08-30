import styled from '@emotion/styled';

export const BoardCellButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.25s ease;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.board[0]};
  border: 0;
  margin: 0;
  padding: 0;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAccent};
  }

  ${({ theme }) => theme.media.breakpoints.s} {
    font-size: ${({ theme }) => theme.typography.board[1]};
  }
`;
