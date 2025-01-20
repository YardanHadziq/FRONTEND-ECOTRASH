import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Card = ({ title, subtitle, icon, buttonText, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  button: {
    marginTop: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Card;
