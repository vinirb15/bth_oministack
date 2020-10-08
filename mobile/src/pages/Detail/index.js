import React from 'react';
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity, View, Image, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import logoImg from '../../assets/user.png'


export default function Detail() {
const navigation = useNavigation();

function navigationBack() {
    navigation.goBack()
}

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={styles.logoImg} />
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty], { marginTop: 0 }}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>algum caso</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Save this day!</Text>
                <Text style={styles.heroTitle}>Be the hero of this case</Text>

                <Text style={styles.heroDescription}>Entre em contato</Text>

                <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => { }}>
                    <Text style={styles.actionText}>Whatsapp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.action} onPress={() => { }}>
                    <Text style={styles.actionText}>E-Mail</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}