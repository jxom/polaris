import * as React from 'react';
import {mountWithAppProvider} from '../../../../tests/utilities';
import Label, {labelID} from '..';

describe('<Label />', () => {
  describe('id', () => {
    it('uses the ID as the for attribute', () => {
      const label = mountWithAppProvider(<Label id="MyThing" />);
      expect(label.find('label').prop('htmlFor')).toBe('MyThing');
    });

    it('creates an ID for the label from the ID of the connected resource', () => {
      const label = mountWithAppProvider(<Label id="MyThing" />);
      const id = labelID('MyThing');
      expect(label.find('label').prop('id')).toBe(id);
    });
  });
});
