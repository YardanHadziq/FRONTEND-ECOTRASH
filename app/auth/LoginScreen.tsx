import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert, ImageBackground, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedView } from "@/components/ThemedView";
import API_URL from "../../config/config";

export default function LoginScreen() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleLogin = async () => {
		try {
			const response = await axios.post(`${API_URL}/api/auth/login`, {
				username,
				password,
			});
			const { token } = response.data.data;
			await AsyncStorage.setItem("token", token);
			router.replace("/(tabs)"); // Prevent back navigation to login
		} catch (error) {
			const errorMessage = (error as any).response?.data?.message || "An error occurred";
			Alert.alert("Login Failed", errorMessage);
		}
	};

	return (
		<ImageBackground source={require("../../assets/images/bg.jpg")} style={styles.backgroundImage}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
			>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
					<ThemedView style={styles.container}>
						<Text style={styles.title}>Log In to EcoTrash</Text>
						<Text style={styles.subtitle}>Login untuk menjadikan limbah lebih bermanfaat</Text>
						<Text style={styles.user}>Username or Email</Text>
						<TextInput
							style={styles.input}
							value={username}
							onChangeText={setUsername}
							autoCapitalize="none"
						/>
						<Text style={styles.pass}>Password</Text>
						<TextInput
							style={styles.input}
							value={password}
							onChangeText={setPassword}
							secureTextEntry
						/>
						<View style={styles.forgotPasswordContainer}>
							<TouchableOpacity onPress={() => Alert.alert("Forgot Password", "Forgot password functionality not implemented yet.")}> 
								<Text style={styles.forgotPasswordText}>Forgot?</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							style={styles.loginButton}
							onPress={handleLogin}
						>
							<Text style={styles.loginButtonText}>Login Account</Text>
						</TouchableOpacity>
						<View style={styles.registerContainer}>
							<Text style={styles.registerText}>Belum Punya Akun? Silahkan </Text>
							<TouchableOpacity onPress={() => router.push("/auth/RegisterScreen")}>
								<Text style={styles.registerLink}>Sign up</Text>
							</TouchableOpacity>
						</View>
					</ThemedView>
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
		marginTop: 250,
		alignItems: "center",
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
	user: {
		marginRight: 200,
		fontSize: 14,
		color: "#FFF",
	},
	pass: {
		marginRight: 260,
		fontSize: 14,
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
	forgotPasswordContainer: {
		width: "100%",
		alignItems: "flex-end",
		marginBottom: 16,
	},
	forgotPasswordText: {
		color: "#000",
		fontSize: 14,
		fontWeight: "600",
	},
	loginButton: {
		width: "100%",
		height: 48,
		backgroundColor: "#00BD35",
		borderRadius: 24,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 16,
	},
	loginButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "600",
	},
	registerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	registerText: {
		fontSize: 14,
		color: "#FFF",
	},
	registerLink: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#000",
	},
});
