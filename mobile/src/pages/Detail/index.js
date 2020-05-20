import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá APAD, estou entrando em contato para ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}`

  function navigateBack() {
    navigation.goBack();
  };

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.name}`,
      recipients: [incident.email],
      body: message,
    })
  };

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
  }

//---------------------------- Rendering Components ------------------------------------------------------
  return (
    <View  style={styles.container}>
      {/*Cabeçalho da página*/}
      <View style={styles.header}>
        <Image source={logoImg}/>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      {/*Detalhes do Incindent*/}
      <View style={styles.incidentDetails}>
        <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.city}-{incident.uf}</Text>
          
        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>DESCRIÇÃO DO CASO:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>{
          Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL' })
          .format(incident.value)}
        </Text>
      </View>

      {/*Área de Contatos*/}
      <View style={styles.contact}>
        <Text style={styles.title}>Salve o dia! Seja o herói desse caso!</Text>
        <Text style={styles.subTitle}>Entre em Contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}
