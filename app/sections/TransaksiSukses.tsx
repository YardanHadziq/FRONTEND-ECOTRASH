import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const TransactionSuccess = () => {
    const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>TRANSAKSI</Text>
      </View>
      
      <View style={styles.square} />
      
      <View style={styles.cardContainer}>
        <Image
          source={require('../../assets/Logo_QRIS.png')}
          style={styles.qrisLogo}
        />
        <Text style={styles.successMessage}>✔ Pembayaran Sukses!</Text>

        <View style={styles.paymentDetails}>
          <View style={styles.paymentRow}>
            <View style={styles.underColor} />
            <Text style={styles.label}>Total Payment</Text>
            <Text style={styles.amount}>Rp 50.000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Nomor Referensi</Text>
            <Text style={styles.value}>8484759397</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Jenis Transaksi</Text>
            <Text style={styles.value}>Pembayaran QRIS</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Lokasi Merchant</Text>
            <Text style={styles.value}>JL RAYA BOGOR</Text>
          </View>
          <Text style={styles.date}>24 Dec 2024 | 17:38</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => router.push('../(tabs)')} style={styles.button}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
	marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  backButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    marginTop: 50,
    marginBottom: 40,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  qrisLogo: {
    width: "100%",
    height: 80,
    resizeMode: 'contain',
    marginBottom: 40,
    marginTop: 30,
  },
  successMessage: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentDetails: {
    width: '100%',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
  value: {
    fontSize: 14,
    color: '#555',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#00BD35',
    borderRadius: 17,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  square: {
    position: 'absolute',
    padding: 110,
    backgroundColor: '#1F8E3F',
    alignItems: 'center',
    width: 500,
    resizeMode: 'contain',
    marginTop: 100,
  },
  underColor: {
    position: 'absolute',
    width: 283,
    flex: 1,
    height: 45,
    backgroundColor: '#D9FCE3',
    alignItems: 'center',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    marginRight: 7,
  }
});

export default TransactionSuccess;
