/* @flow */
'use strict';

import React, { TouchableOpacity, StyleSheet } from 'react-native';

import Styles from '../Styles';

const Checkbox = (props) => {
    let backgroundColor = {
        backgroundColor: props.selected ? props.selectedColor : props.defaultColor
    };
    let size = props.children ? {} : {
        height: props.checkboxStyle.height ? props.checkboxStyle.height : 26,
        width: props.checkboxStyle.width ? props.checkboxStyle.width : 26,
    };

    return (
        <TouchableOpacity style={[props.checkboxStyle, backgroundColor, styles.center, size]} onPress={props.onSelect}>
            { props.children }
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

Checkbox.propTypes = {
    children: React.PropTypes.element,
    defaultColor: React.PropTypes.string,
    selectedColor: React.PropTypes.string,
    selected: React.PropTypes.bool,
    onSelect: React.PropTypes.func.isRequired,
    checkboxStyle: React.PropTypes.oneOfType([ React.PropTypes.number, React.PropTypes.object ])
};

Checkbox.defaultProps = {
    checkboxStyle: Styles.checkboxStyle,
    defaultColor: Styles.defaultColor,
    selectedColor: Styles.selectedColor,
    onSelect: () => {}
}

export default Checkbox;
