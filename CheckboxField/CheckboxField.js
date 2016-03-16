/* @flow */
'use strict';

import React, { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Styles from '../Styles';
import Checkbox from '../Checkbox/Checkbox';

const CheckboxField = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View style={props.containerStyle}>
                <Text style={props.labelStyle}>{ props.label }</Text>
                <Checkbox
                    selected={props.selected}
                    onSelect={props.onSelect}
                    defaultColor={props.defaultColor}
                    selectedColor={props.selectedColor}
                    checkboxStyle={props.checkboxStyle}>
                    { props.children }
                </Checkbox>
            </View>
        </TouchableOpacity>
    );
};

CheckboxField.propTypes = {
    // CheckboxField
    label: React.PropTypes.string,
    containerStyle: React.PropTypes.oneOfType([ React.PropTypes.number, React.PropTypes.object ]),
    labelStyle: React.PropTypes.oneOfType([ React.PropTypes.number, React.PropTypes.object ]),

    // Checkbox
    defaultColor: React.PropTypes.string,
    selectedColor: React.PropTypes.string,
    selected: React.PropTypes.bool,
    onSelect: React.PropTypes.func.isRequired,
    checkboxStyle: React.PropTypes.oneOfType([ React.PropTypes.number, React.PropTypes.object ]),
    children: React.PropTypes.element
};

CheckboxField.defaultProps = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },
    labelStyle: {
        flex: 1
    },
    checkboxStyle: Styles.checkboxStyle,
    defaultColor: Styles.defaultColor,
    selectedColor: Styles.selectedColor,
    onSelect: () => {}
}

export default CheckboxField;
