import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function HomeScreen() {

  const handlePress = (name: string) => {
    Alert.alert(name);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      
      <View style={styles.profileCard}>
        <Image
          source={require('../../assets/images/img1.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileTitle}>Profile Title</Text>
      </View>

      
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#8e2de2' }]}
          onPress={() => handlePress('Button 1')}
        >
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4a90e2' }]}
          onPress={() => handlePress('Button 2')}
        >
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.gridContainer}>
        <Image source={require('../../assets/images/img2.png')} style={styles.gridImage} />
        <Image source={require('../../assets/images/img3.png')} style={styles.gridImage} />
        <Image source={require('../../assets/images/img4.png')} style={styles.gridImage} />
        <Image source={require('../../assets/images/img5.png')} style={styles.gridImage} />
        <Image source={require('../../assets/images/img6.png')} style={styles.gridImage} />
        <Image source={require('../../assets/images/img7.png')} style={styles.gridImage} />
      </View>

      
      <TouchableOpacity
        style={styles.bottomButton}
        onPress={() => handlePress('Button 3')}
      >
        <Text style={styles.buttonText}>Button 3</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    alignItems: 'center'
  },

  
  profileCard: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 4
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginBottom: 10
  },

  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },

  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold'
  },


  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },

  gridImage: {
    width: '30%',
    height: 100,
    borderRadius: 10,
    marginBottom: 15
  },


  bottomButton: {
    width: '100%',
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40
  }
});