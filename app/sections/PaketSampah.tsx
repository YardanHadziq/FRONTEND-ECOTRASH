import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from "expo-router";

const PaketSampah = () => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Paket Sampah</Text>
      </View>

      <Text style={styles.subHeader}>
        Order Layanan Paket Sampah
      </Text>
      <Text style={styles.description}>
        Silakan pilih layanan paket sampah yang sesuai dengan kriteria Anda.
      </Text>
      <View style={styles.packageContainer}>
        <TouchableOpacity 
          style={[styles.packageCard, styles.green]} 
          onPress={() => router.push('/sections/JadwalPenjemputan')}>
          <Text style={styles.packageTitle}>PAKET RUMAHAN</Text>
          <Text>Rp 50.000/BULAN</Text>
          <Text>Paket Rumahan adalah Paket untuk Pengambilan Sampah Organik dan Non-organik Lansung Dirumahmu.</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.packageCard, styles.yellow]} 
          onPress={() => router.push('/sections/JadwalPenjemputan')}>
          <Text style={styles.packageTitle}>PAKET KOMERSIAL</Text>
          <Text>Rp 100.000/BULAN</Text>
          <Text>Paket Komersial adalah Untuk Pengambilan Sampah dari Lingkungan Perdagangan atau jasa Komersial, Seperti Perkotaan, Rumah Makan, Pusat Perdagangan, Perkantoran, Hotel, Toko Percetakan, Bengkel dan Lainnya.</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.packageCard, styles.purple]} 
          onPress={() => router.push('/sections/JadwalPenjemputan')}>
          <Text style={styles.packageTitle}>PAKET INDUSTRI</Text>
          <Text>Rp 300.000/BULAN</Text>
          <Text>Paket Industri adalah Limbah Pakaian, Limbah Plastik, Serpihan Kayu, Residu Bubur Kertas, Kabel, Residu Bubur semen, Besi, dan Hasil Buangan Limbah Pabrik.</Text>
        </TouchableOpacity>
      </View>
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
    padding: 10,
    marginBottom: 18,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
    color: '#555',
  },
  packageContainer: {
    marginTop: 16,
  },
  packageCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 26,
  },
  packageTitle: {
    fontWeight: 'bold',
    marginBottom: 18,
  },
  green: {
    backgroundColor: '#d4edda',
  },
  yellow: {
    backgroundColor: '#fff3cd',
  },
  purple: {
    backgroundColor: '#e2d7f3',
  },
});

export default PaketSampah;
