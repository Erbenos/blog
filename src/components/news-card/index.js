import React from 'react';
import PropTypes from 'prop-types';

import NewsArrow from '!!raw-loader!./news-arrow.svg';
import {
  Link,
  Card,
  Divider,
  Row,
  Text,
  Title,
  TitleIcon,
} from '../../styles/news-card';

const NewsCard = ({ items }) => (
  <Card>
    <Row>
      <TitleIcon src={'/icons/news.svg'} dangerouslySetInnerHTML={{ __html: NewsArrow }}>
      </TitleIcon>
      <Title>Krátké aktuality</Title>
    </Row>
    {items.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <Divider />
          <Link href={item.url}>
            <Text>{item.text}</Text>
          </Link>
        </React.Fragment>
      );
    })}
  </Card>
);

NewsCard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

NewsCard.defaultProps = {
  items: [],
};

export default NewsCard;
