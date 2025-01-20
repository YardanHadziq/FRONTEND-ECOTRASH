import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from '@/components/ThemedText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import API_URL from '@/config/config';
import { Dialog, Portal, PaperProvider } from 'react-native-paper';

type UserProfile = {
  username: string;
  email: string;
};

const Profile = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [dialogVisible, setDialogVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const response = await axios.get<{ data: UserProfile }>(`${API_URL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    setDialogVisible(true);
  };

  const confirmLogout = async () => {
    await AsyncStorage.removeItem("token");
    router.replace("/auth/WelcomeScreen");
  };

  if (loading) {
    return (
      <PaperProvider>
        <ThemedView style={styles.container}>
          <ActivityIndicator animating={true} />
        </ThemedView>
      </PaperProvider>
    );
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>PROFILE</Text>
        </View>

        {/* Profile Picture */}
        <View style={styles.profilePictureContainer}>
          <Image
            source={require('../../assets/my-account-icon.png')} // Ganti dengan foto pengguna
            style={styles.profilePicture}
          />
          <TouchableOpacity style={styles.editPhotoButton}>
            <Text style={styles.editPhotoText}>Edit Foto</Text>
          </TouchableOpacity>
        </View>

        {/* Identitas Section */}
        {profile ? (
            <View style={styles.identitasBox}>
              <Text style={styles.identitasItem}>
                <Text style={styles.label}>Nama Lengkap: </Text>
                <Text>{profile?.username}</Text>
              </Text>
              <Text style={styles.identitasItem}>
                <Text style={styles.label}>Email: </Text>
                <Text>{profile?.email}</Text>
              </Text>
              <Text style={styles.identitasItem}>
                <Text style={styles.label}>Phone Number: </Text>+62 8321348950
              </Text>
              <Text style={styles.identitasItem}>
                <Text style={styles.label}>Alamat: </Text>Jalan Raya Bogor
              </Text>
            </View>
          ) : (
            <Text>No profile data available</Text>
          )}

        <ThemedView style={styles.container}>
          <Button
            title="Logout"
            onPress={handleLogout}
          />
        </ThemedView>

        <Portal>
          <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
            <Dialog.Title>Logout</Dialog.Title>
            <Dialog.Content>
              <ThemedText>Are you sure you want to logout?</ThemedText>
            </Dialog.Content>
            <Dialog.Actions style={styles.dialogActions}>
              <TouchableOpacity onPress={() => setDialogVisible(false)}><ThemedText>Cancel</ThemedText></TouchableOpacity>
              <TouchableOpacity onPress={confirmLogout}><ThemedText>Yes</ThemedText></TouchableOpacity>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  editPhotoButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  editPhotoText: {
    color: '#fff',
    fontSize: 14,
  },
  identitasContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  identitasBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
  },
  identitasItem: {
    fontSize: 14,
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
  },
  bioContainer: {
    marginBottom: 16,
  },
  bioText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
  },
  dialogActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default Profile;
