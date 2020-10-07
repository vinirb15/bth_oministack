import React from 'react'
import { View, Image, Text } from 'react-native'

import logoImg from '../../assets/user.png'

import styles from './styles'

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={styles.logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo</Text>
        </ View>
    );
}