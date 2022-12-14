import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import SafeScreen from './SafeScreen';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, placeholder, onSelectItem, selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={defaultStyles.colors.mediumGray}
                        style={styles.icon}
                        />
                        )}
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={defaultStyles.colors.mediumGray}
                        />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <SafeScreen>
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) =>
                            <PickerItem
                                label={item.label}
                                onPress={() =>
                                    {
                                        setModalVisible(false);
                                        onSelectItem(item);
                                    }
                                }
                            />
                        }
                    />
                </SafeScreen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGray,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    }
})

export default AppPicker;