import React from 'react'
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

export const LogoutModal = ({ visible, hideDialog, Logout }) => {

    return (
        <View>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>ออกจากระบบ</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>คูณต้องการออกจากระบบ ?</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={Loguot}>ยืนยัน</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}
