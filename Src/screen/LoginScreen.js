import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Image source={IMAGES.HOUSE} style={{borderBottomLeftRadius: 70}} />
      </View>
      <View style={styles.icon}>
        <AntDesign name="minus" size={30} color={'black'} />
        <AntDesign name="minus" size={30} color={'black'} />
        <AntDesign name="minus" size={30} color={'red'} />
      </View>
      <View style={styles.textview}>
        <Text style={styles.viewtext}>Find Your sweet home</Text>
      </View>
      <View style={styles.secondtext}>
        <Text style={styles.secondview}>
          Schedule visits in just a few clicks visits in just s few clicks
        </Text>
      </View>

      <TouchableOpacity style={styles.touch}>
        <Text style={{color: 'white',fontSize:20,textAlign:'center',marginVertical:10}}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textview: {
    marginTop: 30,
    marginHorizontal: 20,
    width: 180,
  },
  viewtext: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  secondtext: {
    marginTop: 10,
    marginHorizontal: 20,
    width: 270,
  },
  secondview: {
    letterSpacing: 1,
    fontSize: 15,
  },
  touch: {
    backgroundColor: 'black',
    height: 50,
    // alignItems: 'center',
    marginHorizontal: 20,
    borderRadius:15,
    marginVertical:40,
  },
});
