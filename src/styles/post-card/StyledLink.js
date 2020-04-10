import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--cd-post-card-link-text-color);

  :visited {
    opacity: 0.75;
    color: var(--cd-post-card-link-visited-text-color);
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: color .2 ease-in-out;
  }
`;

export default StyledLink;
