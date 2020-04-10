import styled from 'styled-components';

const Span = styled.span`
  padding-bottom: 2px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);

  :hover {
    border-bottom: solid 1px rgba(0, 0, 0, 0.6);
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    transition: border .2s ease-in-out;
  }
`;

export default Span;
