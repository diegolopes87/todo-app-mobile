import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import Header from '../../components/Header'

export default function Home() {

    return (
        <View style={styles.container}>
            <Header showNotification />

        </View>
    )
}