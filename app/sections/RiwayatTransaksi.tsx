import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";

const RiwayatTransaksi = () => {
  const navigation = useNavigation();
  const router = useRouter();

  // Dummy data untuk riwayat transaksi
  const data = [
    {
      id: '1',
      title: 'Order Penjemputan',
      description: 'Melakukan Order Penjemput Barang',
      date: '15/01/2023',
      price: 'Rp50.000',
      image: require('../../assets/order-icon.png'),
    },
    {
      id: '2',
      title: 'Order Penjemputan',
      description: 'Melakukan Order Penjemput Barang',
      date: '17/01/2023',
      price: 'Rp50.000',
      image: require('../../assets/order-icon.png'),
    },
    {
      id: '3',
      title: 'Order Penjemputan',
      description: 'Melakukan Order Penjemput Barang',
      date: '15/02/2023',
      price: 'Rp50.000',
      image: require('../../assets/order-icon.png'),
    },
    {
      id: '4',
      title: 'Order Penjemputan',
      description: 'Melakukan Order Penjemput Barang',
      date: '30/03/2023',
      price: 'Rp50.000',
      image: require('../../assets/order-icon.png'),
    },
    {
      id: '5',
      title: 'Order Penjemputan',
      description: 'Melakukan Order Penjemput Barang',
      date: '31/04/2023',
      price: 'Rp50.000',
      image: require('../../assets/order-icon.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => router.push('/sections/TransaksiSukses')}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemDate}>{item.date}</Text>
        </View>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Riwayat Transaksi</Text>
      </View>

      {/* List Riwayat Transaksi */}
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
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
  itemDate: {
    fontSize: 12,
    color: '#888',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default RiwayatTransaksi;
