import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function PenjemputanSampah() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Logo/icon */}
            <Image
                source={require("../../assets/ceklis.png")}
                style={styles.logo}
            />
            {/* Title and description */}
            <Text style={styles.title}>SAMPAH SEGERA DIJEMPUT</Text>
            <Text style={styles.description}>
                Selamat atas penukaran point yang anda lakukan sudah sukses, terimakasih karna telah bekerjasama dan menjadi langganan kami.
            </Text>
            <Text style={styles.description}>
                Jika ada kesalahan / penukaran belum masuk ke rekening anda maka hub admin secepatnya dan upload foto.
            </Text>
            

            {/* Continue Button */}
            <TouchableOpacity
                style={[styles.button, styles.continueButton]}
                onPress={() => router.push("../(tabs)")}
            >
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>

            {/* Chat Room Button */}
            <TouchableOpacity
                style={[styles.button, styles.cetakButton]}
                onPress={() => router.push("../(tabs)/chatroom")}
            >
                <Text style={styles.cetakButtonText}>Kontak Petugas</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00BD35",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 32,
    },
    logo: {
        width: "100%",
        height: 172,
        resizeMode: "contain",
        marginBottom: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 34,
    },
    description: {
        fontSize: 12,
        color: "#fff",
        textAlign: "center",
        paddingHorizontal: 30,
        marginBottom: 10,
    },
    button: {
        width: "80%",
        padding: 10,
        borderRadius: 25,
        marginBottom: 15,
        alignItems: "center",
    },
    continueButton: {
        marginTop: 40,
        backgroundColor: "#fff",
    },
    continueButtonText: {
        color: "#00BD35",
        fontSize: 16,
        fontWeight: "bold",
    },
    cetakButton: {
        backgroundColor: "#00BD35",
        marginTop: 4,
        borderWidth: 3,
        borderColor: "#fff",
    },
    cetakButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
