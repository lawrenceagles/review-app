// React
import React from "react";
import PropTypes from "prop-types";

// mobile components
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const CustomButton = ({ text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.button}>
				<Text style={styles.buttonText}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button     : {
		borderRadius      : 8,
		paddingVertical   : 14,
		paddingHorizontal : 10,
		backgroundColor   : "#f01d71",
	},
	buttonText : {
		color         : "white",
		fontWeight    : "bold",
		textTransform : "uppercase",
		fontSize      : 16,
		textAlign     : "center",
	},
});

CustomButton.propTypes = {
	text    : PropTypes.string.isRequired,
	onPress : PropTypes.func.isRequired,
};

export default CustomButton;
