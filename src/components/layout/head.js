import Helmet from 'react-helmet';
import React from 'react';
import config from '../../../data/site-config';

const Head = () => (
  <>
    <Helmet>
      <html lang={config.siteDefaultLanguage} />
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans:400,700"
        rel="stylesheet"
      />
      <meta name="description" content={config.siteDescription} />
    </Helmet>
  </>
);

export default Head;
