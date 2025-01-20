import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, ImageBackground, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import API_URL from "../../config/config";

export default function RegisterScreen() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const router = useRouter();

	const handleRegister = async () => {
		try {
			await axios.post(`${API_URL}/api/auth/register`, {
				username,
				password,
				email,
			});
			Alert.alert("Registration Successful", "You can now log in");
			router.replace("/auth/LoginScreen");
		} catch (error) {
			Alert.alert("Registration Failed", (error as any).response?.data?.message || "An error occurred");
		}
	};

	return (
		<ImageBackground source={require("../../assets/images/bg.jpg")} style={styles.backgroundImage}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
			>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
					<View style={styles.container}>
						<Text style={styles.title}>Sign Up to EcoTrash</Text>
						<Text style={styles.subtitle}>Masuk dan jadilah bagian dari perubahan</Text>

						<TextInput
							style={styles.input}
							placeholder="Masukkan Username"
							value={username}
							onChangeText={setUsername}
							autoCapitalize="none"
						/>
						<TextInput
							style={styles.input}
							placeholder="Masukkan Email"
							value={email}
							onChangeText={setEmail}
							keyboardType="email-address"
							autoCapitalize="none"
						/>
						<TextInput
							style={styles.input}
							placeholder="Masukkan Password"
							value={password}
							onChangeText={setPassword}
							secureTextEntry
						/>

						<TouchableOpacity
							style={styles.registerButton}
							onPress={handleRegister}
						>
							<Text style={styles.registerButtonText}>Create Account</Text>
						</TouchableOpacity>
						<View style={styles.backContainer}>
							<Text style={styles.backText}>Sudah Punya Akun? </Text>
							<TouchableOpacity onPress={() => router.replace("/auth/LoginScreen")}>
								<Text style={styles.backLink}>Login</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: "100%",
		height: 275,
		marginTop: 32,
		resizeMode: "cover",
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 250,
		padding: 16,
		backgroundColor: "#3B603F",
		borderTopLeftRadius: 27,
		borderTopRightRadius: 27,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 8,
		color: "#FFF",
	},
	subtitle: {
		fontSize: 16,
		marginBottom: 24,
		color: "#FFF",
	},
	input: {
		width: "100%",
		height: 48,
		borderColor: "#B7C9A8",
		borderWidth: 1,
		borderRadius: 24,
		paddingHorizontal: 12,
		marginBottom: 16,
		backgroundColor: "#fff",
	},
	registerButton: {
		width: "100%",
		height: 48,
		backgroundColor: "#00BD35",
		borderRadius: 24,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 16,
	},
	registerButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
	},
	backContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	backText: {
		fontSize: 14,
		color: "#FFF",
	},
	backLink: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#000",
	},
});
