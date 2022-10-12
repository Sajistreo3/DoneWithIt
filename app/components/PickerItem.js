import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';
import ListItemSeparator from './ListItemSeparator';

function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{label}</AppText>
            <ListItemSeparator />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
    }
})

export default PickerItem;