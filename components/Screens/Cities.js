import React, {useContext} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {UserContext} from '../ContextApi';

export default function Cities({navigation}) {
  const {userData} = useContext(UserContext);
  const [data] = userData;
  return (
    <ScrollView style={styles.scrollview}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button title={'Back'} onPress={() => navigation.navigate('AddCity')} />
        <Text style={{marginRight: 40, color: 'white',marginTop: 30, fontSize: 25, fontWeight: 'bold'}}>Cities</Text>
        <View />
      </View>
      <View>
        {data.length > 0 ? (
          data.map((value, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Places', {index: index})}>
                <View
                 style={styles.scrollItem}>
                  <Text  style={{
                    color: 'white',
                  }}>{value.country}</Text>
                  <Text  style={{
                    color: 'white',
                  }}>{value.city}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View style={styles.scrollItem}>
          <Text  style={{
                    color: 'white',
                    fontSize: 15
                  }}>No country available!</Text>
                  </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scrollItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'purple',
    width: '90%',
    height: 50,
    padding: 10,
    margin: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },

  scrollview: {
    width: '100%',
    height: '100%',
        backgroundColor:'pink',
  },

 
});