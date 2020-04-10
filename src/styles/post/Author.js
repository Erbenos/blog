import styled from 'styled-components';

export const Author = styled.a`
  text-decoration: none;
  color: var(--cd-post-author-text-color);

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color .2s ease-in-out;
  }
`;

export default Author;
