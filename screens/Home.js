
import { View, StyleSheet } from 'react-native';
import * as React from 'react';
import { Home } from '../styles/Home';
import { Avatar, Card, IconButton, Modal, Portal, Text, Button, Provider } from 'react-native-paper';


export default function App() {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.card} >
                    <Card.Title
                        title="Total Income"
                        subtitle="5000"
                        left={(props) => <Avatar.Icon {...props} icon="account" />}
                        right={(props) => <IconButton {...props} icon="plus" onPress={() => { showModal() }} />}
                    />
                </View>



            </View>
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                    </Modal>
                </Portal>
            </Provider>

        </View>
    );
}





const styles = StyleSheet.create({
    card: {
        backgroundColor: '#9f9f9f',
        marginTop: 10,
        color: "#fff"


    }

})