import { StyleSheet, Platform, StatusBar } from 'react-native';
import Colors from '../../utils/Colors';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 54,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        top: Platform.os === 'ios' ? 0 : StatusBar.currentHeight
    },
    logo: {
        width: 100,
        height: 30,
    },
    notification: {
        position: 'absolute',
        right: 20,

    },
    notificationText: {
        color: 'white',
    },

    circle: {
        backgroundColor: Colors.primary,
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        width: 24,
        borderWidth: 2,
        borderColor: 'white',
        right: -10,
        top: -10,
    },

    bell: {
        width: 20,
        height: 25,
    },
    leftIconImg: {
        width: 25,
        height: 25,
    },
    leftIcon: {
        position: 'absolute',
        left: 10,


    },
})

export default styles;
