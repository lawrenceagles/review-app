import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	FlatList,
	Modal,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";

const Home = ({ navigation }) => {
	const [ modalOpen, setModalOpen ] = useState(false);
	const [ reviews, setReviews ] = useState([]);

	const addReview = (review) => {
		review.key = Math.random().toString();
		setReviews((currentReviews) => {
			return [ review, ...currentReviews ];
		});
		setModalOpen(false);
	};

	return (
		<View style={globalStyles.container}>
			<Modal visible={modalOpen} animationType='slide'>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.modalContent}>
						<MaterialIcons
							name='close'
							size={24}
							style={{ ...styles.modalToggle, ...styles.modalClose }}
							onPress={() => setModalOpen(false)}
						/>
						<ReviewForm addReview={addReview} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>

			<MaterialIcons name='add' size={24} style={styles.modalToggle} onPress={() => setModalOpen(true)} />

			{reviews &&
			reviews.length > 0 && (
				<FlatList
					data={reviews}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
							<Card>
								<Text style={globalStyles.titleText}>{item.title}</Text>
							</Card>
						</TouchableOpacity>
					)}
				/>
			)}

			{reviews &&
			reviews.length === 0 && (
				<View style={styles.errorMessage}>
					<Text>No Review Found. Add Review And TryAgain!</Text>
				</View>
			)}
		</View>
	);
};

Home.propTypes = {
	navigation : PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
	modalToggle  : {
		justifyContent : "center",
		alignItems     : "center",
		marginBottom   : 10,
		borderWidth    : 1,
		borderColor    : "#f2f2f2",
		padding        : 10,
		borderRadius   : 10,
		alignSelf      : "center",
	},
	modalClose   : {
		marginTop    : 20,
		marginBottom : 0,
	},
	modalContent : {
		flex : 1,
	},
	errorMessage : {
		justifyContent : "center",
		alignItems     : "center",
		// verticalAlign  : "middle",
	},
});

export default Home;
