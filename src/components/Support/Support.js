import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import { Section } from '../Section/Section';
import { PageHeader } from '../PageHeader/PageHeader';
import SupportForm from '../SupportForm';

import './Support.css';

const SUPPORT_EMAIL = 'support@dlg.ru';

export function Support() {
  return (
    <Section className="support">
      <div className="support__col support__section support__section-form">
        <PageHeader>
          <FormattedMessage id="support_header" />
        </PageHeader>
        <SupportForm className="support__form" />
      </div>

      <div className="support__col support__section support__section-info">
        <div className="support__corporate">
          <div className="support__corporate-title">
            <FormattedMessage id="support_corporate_title" />
          </div>
          <div className="support__corporate-text">
            <FormattedHTMLMessage
              id="support_corporate_text_before"
              values={{
                email: SUPPORT_EMAIL,
              }}
            />
          </div>
        </div>
        <div className="support__mail-box">
          <p className="support__mail-text">
            <FormattedMessage id="support_connect" />
          </p>
          <p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="link--default">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
