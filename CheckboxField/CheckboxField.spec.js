import React, { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Checkbox, CheckboxField } from '../index.js';

describe('<CheckboxField />', () => {
    it('should render 1 TouchableOpacity component', () => {
        const checkboxField = shallow(<CheckboxField />);
        expect(checkboxField.find(TouchableOpacity)).to.have.length(1);
    });

    it('should render 1 Text label component', () => {
        const checkboxField = shallow(<CheckboxField />);
        expect(checkboxField.find(Text)).to.have.length(1);
    });

    it('should simulate onClick', () => {
        let val = 0;
        const checkboxField = shallow(<CheckboxField onSelect={() => { val++; }} />);
        checkboxField.find(TouchableOpacity).simulate('press');
        expect(val).to.equal(1);
    });

    it('should accept styles as props', () => {
        const styles = StyleSheet.create({
            container: {
                backgroundColor: 'red'
            }
        });

        const checkboxFieldWithStyle = shallow(<CheckboxField containerStyle={styles.container} />);
        expect(checkboxFieldWithStyle.find(View).props().style).to.contain({ backgroundColor: 'red' });

        const checkboxFieldWithObject = shallow(<CheckboxField containerStyle={{ backgroundColor: 'red' }} />);
        expect(checkboxFieldWithObject.find(View).props().style).to.contain({ backgroundColor: 'red' });
    })
});
