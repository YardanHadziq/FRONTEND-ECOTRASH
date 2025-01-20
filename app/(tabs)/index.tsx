import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../../components/Card';
import { useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import API_URL from '@/config/config';

const Home = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.get(`${API_URL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={() => router.push('/sections/Profile')}>
            <Image
              source={require('../../assets/my-account-icon.png')} // Ganti dengan URL gambar profil
              style={styles.profilePicture}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/sections/Profile')}>
            <View>
              <Text style={styles.greeting}>Hi, {profile?.username}</Text>
              <Text style={styles.subGreeting}>Selamat Datang di Trash</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => router.push('/sections/Notifikasi')}>
          <Image
            source={require('../../assets/bell-icon.png')} // Ganti dengan ikon lonceng
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Cards Section */}
      <View style={styles.cardContainer}>
        <Card
          title="Penjemputan Sampah"
          subtitle="Segera klik untuk menjemput sampah!"
          icon={require('../../assets/order-icon.png')}
          buttonText="Order"
          onPress={() => router.push('/sections/PaketSampah')}
        />
        <Card
          title="History Transaksi"
          icon={require('../../assets/details-icon.png')}
          buttonText="Details"
          onPress={() => router.push('/sections/RiwayatTransaksi')}
        />
        <Card
          title="Panduan Aplikasi"
          icon={require('../../assets/panduan-icon.png')}
          buttonText="Panduan"
          onPress={() => router.push('/sections/PanduanAplikasi')}
        />
      </View>

      {/* Bottom Navigation */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: '#555',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default Home;
