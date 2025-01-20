import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PanduanAplikasi = () => {
  const navigation = useNavigation();

  // State untuk mengelola apakah konten panduan ditampilkan
  const [expanded, setExpanded] = useState({
    akunBaru: false,
    penjemputan: false,
    pembayaran: false,
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Panduan Aplikasi</Text>
      </View>

      {/* Konten */}
      <View style={styles.content}>
        {/* Bagaimana Cara Membuat Akun Baru */}
        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={() => toggleExpand('akunBaru')}
        >
          <Text style={styles.dropdownText}>
            Bagaimana Cara Membuat Akun Baru?
          </Text>
          <Text style={styles.dropdownIcon}>
            {expanded.akunBaru ? '▲' : '▼'}
          </Text>
        </TouchableOpacity>
        {expanded.akunBaru && (
          <View style={styles.dropdownContent}>
            <Text style={styles.listItem}>
              1. Klik tombol "Sign Up" di bagian bawah halaman login.
            </Text>
            <Text style={styles.listItem}>
              2. Isi data seperti nama, email, dan sandi.
            </Text>
            <Text style={styles.listItem}>
              3. Selesaikan verifikasi melalui email.
            </Text>
            <Text style={styles.listItem}>
              4. Akun Anda siap digunakan!
            </Text>
          </View>
        )}

        {/* Cara Melakukan Penjemputan */}
        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={() => toggleExpand('penjemputan')}
        >
          <Text style={styles.dropdownText}>Cara Melakukan Penjemputan</Text>
          <Text style={styles.dropdownIcon}>
            {expanded.penjemputan ? '▲' : '▼'}
          </Text>
        </TouchableOpacity>

        {/* Cara Melakukan Pembayaran */}
        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={() => toggleExpand('pembayaran')}
        >
          <Text style={styles.dropdownText}>Cara Melakukan Pembayaran</Text>
          <Text style={styles.dropdownIcon}>
            {expanded.pembayaran ? '▲' : '▼'}
          </Text>
        </TouchableOpacity>
      </View>
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
  content: {
    flex: 1,
    padding: 16,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 8,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownIcon: {
    fontSize: 16,
  },
  dropdownContent: {
    padding: 16,
    backgroundColor: '#e7f4e4',
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#cde0cc',
  },
  listItem: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default PanduanAplikasi;
