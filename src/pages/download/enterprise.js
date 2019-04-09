import React from 'react';
import Helmet from 'react-helmet';

import { Page } from '../../components/Page/Page';
import { Container } from '../../components/Container/Container';
import { DownloadEnterprise } from '../../components/DownloadEnterprise/DownloadEnterprise';

export default ({ pageContext: { locale } }) => {
  const metaData = {
    title: locale === 'ru' ? 'Скачать | dialog' : 'Download | dialog',
    description:
      locale === 'ru'
        ? 'это корпоративный мессенджер с возможностью установки на внутренний сервер организации'
        : 'handy and feature-rich enterprise multi-device messenger available for server or cloud – Slack-like, but not Slack-limited',
  };

  return (
    <Page>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Helmet>

      <Container>
        <DownloadEnterprise />
      </Container>
    </Page>
  );
};
