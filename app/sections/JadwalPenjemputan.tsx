import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import DateTimePicker from '@react-native-community/datetimepicker';

const HalamanJadwalPenjemputan = () => {
    const router = useRouter();
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onDateChange = (event, selectedDate) => {
      setShowDatePicker(false); // Tutup DateTimePicker
      if (selectedDate) {
          setDate(selectedDate); // Set tanggal jika dipilih
      }
    };

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Jadwal Penjemputan</Text>
      </View>

      {/* Form */}
      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Alamat */}
        <Text style={styles.label}>Alamat:</Text>
        <TextInput style={styles.input} placeholder="Masukkan Tujuan Penjemputan" />

      {/* Tanggal */}
      <Text style={styles.label}>Tanggal:</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowDatePicker(true)}
      >
        <Text>{date.toLocaleDateString('id-ID')} | {date.toLocaleTimeString('id-ID')}</Text>
      </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={onDateChange}
        />
      )}

        {/* Jenis Paket */}
        <Text style={styles.label}>Jenis Paket:</Text>
        <Picker style={styles.input}>
          <Picker.Item label="Paket Rumahan" value="paket-rumahan" />
          <Picker.Item label="Paket Komersial" value="paket-komersial" />
          <Picker.Item label="Paket Industri" value="paket-industri" />
        </Picker>

        {/* Informasi Pembayaran */}
        <Text style={styles.label}>Informasi Pembayaran:</Text>
        <Text style={styles.infoText}>
          Pembayaran dilakukan ketika petugas datang ke lokasi Anda dan silakan scan barcode untuk pembayaran yang akan diberikan oleh petugas. Setelah pembayaran, petugas akan mengangkut sampah Anda.
        </Text>

        {/* Tombol Selesai */}
        <TouchableOpacity onPress={() => router.push('/sections/KonfirmasiJemput')} style={styles.button}>
          <Text style={styles.buttonText}>Selesai</Text>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
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
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center',
    },
    formContainer: {
      flexGrow: 1,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
      backgroundColor: '#f9f9f9',
    },
    infoText: {
      fontSize: 14,
      color: '#555',
      marginVertical: 8,
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default HalamanJadwalPenjemputan;
