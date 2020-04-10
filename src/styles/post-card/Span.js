import styled from 'styled-components';

const Span = styled.span`
  padding-bottom: 2px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);

  transition: all 200ms ease-in-out;
  :hover {
    border-bottom: solid 1px rgba(0, 0, 0, 0.6);
  }
`;

export default Span;
