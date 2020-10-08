import React from 'react';
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity, View, Image, Text, Linking } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles'

import logoImg from '../../assets/user.png'


export default function Detail() {
    const navigation = useNavigation();
    const message = 'Hello user!!! Im contacting you because im trying help you in CASE 1'

    function navigationBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Hero of this case: CASE 1',
            recipients: ['viniciusbueno15@gmail.com'],
            body: message
        })
    }

     function sendWhatsapp() {
         Linking.openURL(`whatsapp://send?phone=5512982264440&text=${message}`)
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
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}