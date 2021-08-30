import styled from '@emotion/styled';

export const ButtonPrimary = styled.button`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.buttons[0]};
  align-items: center;
  justify-content: center;
  padding: 7.5px;
  flex-shrink: 0;
  transition-property: background, color;
  transition-duration: 200ms;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  border: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryAccent};
    background-color: ${({ theme }) => theme.colors.primaryAccent};
  }
`;
