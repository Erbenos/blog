import styled from 'styled-components';
import { Col } from 'react-grid-system';

const ResponsiveCenterCol = styled(Col)`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export default ResponsiveCenterCol;
