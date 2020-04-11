import React from 'react';
import PropTypes from 'prop-types';
import { Row, Container } from 'react-grid-system';
import {
  CookiesNote,
  FooterLink,
  StyledFooter,
  ToolbarItem,
} from '../../styles/layout';

class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.rootEl = document.querySelector('html');
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    this.rootEl.classList.toggle('is-dark-mode');
  }

  render() {
    return (
      <StyledFooter>
        <Container>
          <Row justify={'center'}>
            {this.props.items.map((item, index) => (
              <ToolbarItem key={index}>
                <FooterLink bold={item.bold} href={item.url}>
                  {item.name}
                </FooterLink>
              </ToolbarItem>
            ))}
          </Row>
          <Row justify={'center'}>
            <CookiesNote>
              Tento web používá k poskytování služeb a analýze návštěvnosti
              soubory cookie. Používáním tohoto webu s tím souhlasíte.
            </CookiesNote>
          </Row>
          <Row justify={'center'}>
            <button onClick={this.changeTheme}>
              Změnit téma
            </button>
          </Row>
        </Container>
      </StyledFooter>
    );
  }
};

Footer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      bold: PropTypes.bool.isRequired,
      url: PropTypes.string.isRequired,
      underline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

Footer.defaultProps = {};

export default Footer;
