import styled from 'styled-components';

export const ButtonLink = styled.a`
  display: inline-block;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--color-light);
  color: var(--color-black);
  padding: 0.6rem 2.5rem;
  border: 2px solid transparent;
  border-radius: var(--border-radius-2);
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: transparent;
    border-color: var(--color-light);
    transform: translateY(-0.5rem);
  }

  &:not(:hover) {
    transform: translateY(0);
  }
`;

export const PrimaryButtonLink = styled(ButtonLink)`
  background: var(--color-primary);
  color: white;

  &:hover {
    background: transparent;
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`;
