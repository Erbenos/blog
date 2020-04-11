import styled from 'styled-components';

const Heading = styled.span`
  padding-bottom: 2px;
  border-bottom: solid 1px var(--cd-post-card-heading-border-color);
  
  :hover {
    border-bottom: solid 1px var(--cd-post-card-heading-hover-border-color);
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: border .2s ease-in-out;
  }
`;

export default Heading;
