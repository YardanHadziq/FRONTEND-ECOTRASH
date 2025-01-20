import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>PEMBAYARAN</Text>
        <Text style={styles.subHeaderText}>QRIS</Text>
        <Text style={styles.instructionText}>Letakkan Kode QRIS Pada Kotak Untuk Dipindai</Text>
      </View>
      <View style={styles.cameraContainer}>
        <CameraView style={styles.camera}>
          <View style={styles.overlayContainer}>
            <View style={styles.overlay} />
            <View style={styles.middleContainer}>
              <View style={styles.overlay} />
              <View style={styles.scanner}>
                <View style={[styles.corner, styles.topLeft]} />
                <View style={[styles.corner, styles.topRight]} />
                <View style={[styles.corner, styles.bottomLeft]} />
                <View style={[styles.corner, styles.bottomRight]} />
              </View>
              <View style={styles.overlay} />
            </View>
            <View style={styles.overlay} />
          </View>
        </CameraView>
      </View>
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => router.push('/sections/PembayaranSukses')}
      >
        <Text style={styles.scanButtonText}>Scan Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
  },
  header: {
    padding: 16,
    backgroundColor: '#1F8E3F',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginTop: 4,
  },
  instructionText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 8,
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#1F8E3F',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  overlay: {
    flex: 1,
  },
  middleContainer: {
    flexDirection: 'row',
  },
  scanner: {
    flex: 3,
    position: 'relative',
    height: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  corner: {
    position: 'absolute',
    borderColor: '#1F8E3F',
    padding: 20,
  },
  topLeft: {
    top: 0,
    left: 0,
    borderLeftWidth: 4,
    borderTopWidth: 4,
  },
  topRight: {
    top: 0,
    right: 0,
    borderRightWidth: 4,
    borderTopWidth: 4,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  scanButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#1F8E3F',
    borderRadius: 8,
    alignItems: 'center',
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});