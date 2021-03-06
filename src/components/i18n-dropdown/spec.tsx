import React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { langDictionary } from '../../i18n';
import I18nDropdown from '.';
import i18n from '../../i18n';

describe('i18n Dropdown tests', () => {
  const baseComponent = () => <I18nDropdown i18n={i18n} langDictionary={langDictionary} />;

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent()).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the component', () => {
      const wrapper = shallow(baseComponent());
      const assertion = wrapper.find('[data-test-id="i18n-dropdown-container"]').length;
      expect(assertion).toBe(1);
    });
  });

  describe('component behavior', () => {
    it('check dropdown closed', () => {
      const wrapper = shallow(baseComponent());
      expect(wrapper.state('isOpen')).toEqual(false);
    });
  });
});
