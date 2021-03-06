import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { langDictionary } from '../../i18n';
import i18n from '../../i18n';

import I18nDropdown from '.';

storiesOf('component.I18nDropdown', module).add('I18n Dropdown', () => (
  <nav className="navbar navbar-expand-md navbar-light bg-pale">
    <ul className="ml-auto navbar-nav">
      <I18nDropdown i18n={i18n} langDictionary={langDictionary} />
    </ul>
  </nav>
));
