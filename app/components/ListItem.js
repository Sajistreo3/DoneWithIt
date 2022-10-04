import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import AppText from './AppText';
import colors from '../config/colors';
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";

function ListItem({title, subTitle, image, IconComponant,  onPress, renderRightActions, backgroundColor = colors.white}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.lightGray}
                    onPress={onPress}
                    >
                    <View style={[styles.container, {backgroundColor}]}>
                        {IconComponant}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: 'bold',
    },
    subTitle: {
        marginTop: 0,
        color: colors.mediumGray,
        fontWeight: '600',
    },

})
export default ListItem;