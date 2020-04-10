import styled from 'styled-components';

const ResponsiveCenterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: normal;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: flex-start;
    border-bottom: #1d1f21 solid 1px;
  }
`;

export default ResponsiveCenterRow;
