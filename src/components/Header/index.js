import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,

} from 'react-native';
import styles from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qrCode from '../../assets/qrcode.png';
import back from '../../assets/back.png';


export default function Header({
    showNotification,
    showBack
}) {

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.leftIcon}>
                <Image
                    source={showBack ? back : qrCode}
                    style={styles.leftIconImg}
                />
            </TouchableOpacity>
            <Image
                source={logo}
                style={styles.logo}
            />
            {showNotification && <TouchableOpacity
                style={styles.notification}>
                <Image
                    source={bell}
                    style={styles.bell} />
                <View style={styles.circle}>
                    <Text style={styles.notificationText}>100</Text>
                </View>
            </TouchableOpacity>}
        </View>
    )
}