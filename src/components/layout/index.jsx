import React from 'react';

import CssReset from '../../styles/Reset';
import GlobalStyle from '../../styles/GlobalStyles';
import CustomProperties from '../../styles/CustomProperties';

import {
  Content,
  Layout,
} from '../../styles/layout';

import Footer from './footer';
import Header from './header';
import Head from './head';

const ITEMS = [
  {
    name: 'Kdo jsme',
    url: 'https://cesko.digital/#idea',
    bold: false,
    underline: false,
  },
  {
    url: 'https://cesko.digital/#projects',
    name: 'Co děláme',
    bold: false,
    underline: false,
  },
  {
    name: 'Blog',
    url: '/',
    bold: false,
    underline: true,
  },
  {
    url: 'https://cesko.digital/en.html',
    name: 'English',
    bold: false,
    underline: false,
  },
  {
    url: 'https://www.facebook.com/cesko.digital',
    name: 'Facebook',
    bold: true,
    underline: false,
  },
  {
    url: 'https://twitter.com/CeskoDigital',
    name: 'Twitter',
    bold: true,
    underline: false,
  },
  {
    url: 'http://github.com/cesko-digital',
    name: 'Github',
    bold: true,
    underline: false,
  },
];

const MainLayout = props => {
  const { children } = props;
  let navBarItems = ITEMS.slice(0, ITEMS.length - 3);
  return (
    <Layout>
      <CssReset/>
      <Head/>
      <Header items={navBarItems} />
      <Content>{children}</Content>
      <Footer items={ITEMS} />
      <CustomProperties/>
      <GlobalStyle/>
    </Layout>
  );
};
export default MainLayout;
