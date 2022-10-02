import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function ListItemDeleteAction({onPress}) {
    return (
        <TouchableHighlight underlayColor={colors.dangerPress} onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name='trash-can'
                    size={35}
                    color={colors.white}
                    />
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ListItemDeleteAction;