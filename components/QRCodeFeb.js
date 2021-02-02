import React from 'react'
import { Provider, Portal, FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Theme } from './Theme';

export const QRCodeFeb = (props) => {
    return (
        <Provider>
            <Portal>
                <FAB
                    style={styles.fab}
                    icon={'qrcode'}
                    {...props}
                />
            </Portal>
        </Provider>
    )
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: Theme.colors.primary
    },
})
