import styled from '@emotion/styled';

export const TemplateGame = styled.div`
  padding: 20px;
  margin: auto;
  display: grid;
  grid-row-gap: 10px;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.paragraph[0]};
  color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.media.breakpoints.s} {
    font-size: ${({ theme }) => theme.typography.paragraph[1]};
  }

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryAccent};
  }
`;
