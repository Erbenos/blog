import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--cd-post-card-link-text-color);
  :visited {
    opacity: 0.75;
    color: var(--cd-post-card-link-visited-text-color);
  }
`;

export default StyledLink;
