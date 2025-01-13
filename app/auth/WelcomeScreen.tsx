import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
	const router = useRouter();

	return (
		<View style={styles.container}>
			{/* Logo/icon */}
			<Image
				source={require("../../assets/images/logo.png")}
				style={styles.logo}
			/>
			{/* Title and description */}
			<Text style={styles.title}>HELLO</Text>
			<Text style={styles.description}>
				Log In atau Sign Up sekarang untuk ikut mewujudkan lingkungan yang lebih bersih dan sehat
			</Text>

			{/* Sign Up Button */}
			<TouchableOpacity
				style={[styles.button, styles.signUpButton]}
				onPress={() => router.push("/auth/RegisterScreen")}
			>
				<Text style={styles.signUpButtonText}>Sign up</Text>
			</TouchableOpacity>

			{/* Log In Button */}
			<TouchableOpacity
				style={[styles.button, styles.logInButton]}
				onPress={() => router.push("/auth/LoginScreen")}
			>
				<Text style={styles.logInButtonText}>Log in</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3B603F",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 32,
	},
	logo: {
		width: 370,
		height: 370,
	},
	title: {
		fontSize: 50,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 10,
	},
	description: {
		fontSize: 15,
		color: "#fff",
		textAlign: "center",
		paddingHorizontal: 30,
		marginBottom: 30,
	},
	button: {
		width: "80%",
		padding: 10,
		borderRadius: 25,
		marginBottom: 15,
		alignItems: "center",
	},
	signUpButton: {
		backgroundColor: "#62825D",
	},
	signUpButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	logInButton: {
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#8BC34A",
	},
	logInButtonText: {
		color: "#62825D",
		fontSize: 16,
		fontWeight: "bold",
	},
});
