import React, {useState, useContext} from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {UserContext} from "../ContextApi";

export default function AddCity({navigation}) {
	const {userData} = useContext(UserContext);
	const [data, setData] = userData;
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const handleClick = () => {
		alert('Country and city added!');
		const pushedData = {country: country, city: city, locations: []};
		setData(data => [pushedData, ...data]);
	}
	return (
		<View style={styles.container}>
			<Text style={styles.secondhead}>Enter Country </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCountry(text)}
			
			/>
			<Text style={styles.secondhead}> Enter City </Text>
			<TextInput
				style={styles.input}
				onChangeText={text => setCity(text)}
			
			/>
			<TouchableOpacity
				style={styles.button}
			>
				<Text style={styles.head} onPress={handleClick}>Add City</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.footbutton}
			>
				<Text style={styles.head} onPress={() => navigation.navigate('Cities')}>View City List!</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 130,
    marginBottom: 120,
    backgroundColor: '#FFC0CB',
  },
 
  input: {
    alignItems: 'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200,
    color: 'white',
    borderColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'purple',
    color: 'white',
    padding: 10,
    width: 100,
  },
  footbutton: {
    marginLeft: 15,
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#FF69B4',
    padding: 10,
    width: 100,
    height: 100,
  },
  head: {
    padding: 20,
    marginBottom: 3,
    color: 'white',
    fontSize: 18,
 },
  secondhead: {
   color: 'white',
    fontSize: 18,
    width: 140,

 },
});