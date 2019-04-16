import React from 'react';
import { FormattedMessage } from 'react-intl';
import ImageFormatted from '../components/ImageFormatted';

import { Page } from '../components/Page/Page';
import { Container } from '../components/Container/Container';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { Promo } from '../components/Promo/Promo';
import { SecureCommunication } from '../components/SecureCommunication/SecureCommunication';
import { EffectiveCommunication } from '../components/EffectiveCommunication/EffectiveCommunication';
import { Partnership } from '../components/Partnership/Partnership';
import { Offer } from '../components/Offer/Offer';

export default () => {
  return (
    <Page>
      <Container>
        <PageHeader className="solution">
          <FormattedMessage id="solutions_simple" />
        </PageHeader>
        <Promo
          element1={
            <ImageFormatted
              imgClass="promo__image promo__image--main"
              src="/images/solution/solution-1@2x.jpg"
              srcSet="/images/solution/solution-1@2x.jpg 2x"
              altLangId="alt_solution_big"
            />
          }
          element2={
            <ImageFormatted
              imgClass="promo__image promo__image--small"
              src="/images/solution/solution-2@2x.jpg"
              srcSet="/images/solution/solution-2@2x.jpg 2x"
              altLangId="alt_solution_small"
            />
          }
        />
        <SecureCommunication />
        <EffectiveCommunication />
        <Partnership />
        <Offer />
      </Container>
    </Page>
  );
};
