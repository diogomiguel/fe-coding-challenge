import styled from '@emotion/styled';

export const GameInfoText = styled.p`
  text-align: center;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export const GameInfoTextResult = styled.strong`
  font-size: ${({ theme }) => theme.typography.paragraph[2]};

  ${({ theme }) => theme.media.breakpoints.s} {
    font-size: ${({ theme }) => theme.typography.paragraph[3]};
  }
`;
