import React from 'react';

import { Heading } from '../Heading/Heading';

export function ModalHeader({ children }) {
  return (
    <div className="modal__window__header">
      <Heading>{children}</Heading>
    </div>
  );
}
