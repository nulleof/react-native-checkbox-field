import React, { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Checkbox } from '../index.js';

describe('<Checkbox />', () => {
    it('should render 1 TouchableOpacity component', () => {
        const checkbox = shallow(<Checkbox />);
        expect(checkbox.find(TouchableOpacity)).to.have.length(1);
    });

    it('should render the correct color', () => {
        const checkboxSelected = shallow(<Checkbox selectedColor='green' selected={true} />);
        expect(checkboxSelected.find(TouchableOpacity).props().style).to.contain({ backgroundColor: 'green' });

        const checkboxDefault = shallow(<Checkbox selectedColor='green' selected={false} defaultColor='#ddd' />);
        expect(checkboxDefault.find(TouchableOpacity).props().style).to.contain({ backgroundColor: '#ddd' });
    });

    it('should simulate onClick', () => {
        let val = 0;
        const checkbox = shallow(<Checkbox onSelect={() => { val++; }} />);
        checkbox.find(TouchableOpacity).simulate('press');
        expect(val).to.equal(1);
    });

    it('should render any child elements', () => {
        const checkbox = shallow(<Checkbox><Text>Checked</Text></Checkbox>);
        expect(checkbox.contains(<Text>Checked</Text>)).to.equal(true);
    });

    it('should accept styles as props', () => {
        const styles = StyleSheet.create({
            container: {
                backgroundColor: 'red'
            }
        });

        const checkboxWithStyle = shallow(<Checkbox checkboxStyle={styles.container} />);
        expect(checkboxWithStyle.find(TouchableOpacity).props().style).to.contain({ backgroundColor: 'red' });

        const checkboxWithObject = shallow(<Checkbox checkboxStyle={{ backgroundColor: 'red' }} />);
        expect(checkboxWithObject.find(TouchableOpacity).props().style).to.contain({ backgroundColor: 'red' });
    });
});
