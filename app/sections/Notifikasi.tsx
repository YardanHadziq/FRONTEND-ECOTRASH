import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notifikasi = () => {
  const navigation = useNavigation();

  // Dummy data untuk notifikasi
  const data = [
    {
      id: '1',
      date: 'Hari Ini, 08:00',
      message: 'Halo, ini jadwal nya untuk membuang sampah mingguan anda, buruan dapatkan...',
      icon: require('../../assets/notification-icon.png'),
    },
    {
      id: '2',
      date: 'Hari Ini, 09:00',
      message: 'Halo, ini jadwal nya untuk membuang sampah mingguan anda, buruan dapatkan...',
      icon: require('../../assets/notification-icon.png'),
    },
    {
      id: '3',
      date: '2 Desember, 09:00',
      message: 'Halo, ini jadwal nya untuk membuang sampah mingguan anda, buruan dapatkan...',
      icon: require('../../assets/notification-icon.png'),
    },
    {
      id: '4',
      date: '18 Agustus, 07:30',
      message: 'Halo, ini jadwal nya untuk membuang sampah mingguan anda, buruan dapatkan...',
      icon: require('../../assets/notification-icon.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={item.icon} style={styles.notificationIcon} />
      <View style={styles.notificationDetails}>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Notifikasi</Text>
      </View>

      {/* List Notifikasi */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 16,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
  },
  notificationIcon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  notificationDetails: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  notificationDate: {
    fontSize: 12,
    color: '#888',
  },
});

export default Notifikasi;
