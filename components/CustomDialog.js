import React from 'react';
import { Dialog } from '@rneui/themed';
import { View } from 'react-native';

// eslint-disable-next-line react/prop-types
const CustomDialog = ({ isVisible, onBackdropPress, title, children }) => (
    <View>
        <Dialog isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <Dialog.Title titleStyle={{ textAlign: 'center' }} title={title} />
            {children}
        </Dialog>
    </View>
);

export default CustomDialog;
