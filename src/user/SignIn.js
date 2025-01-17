import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default SignIn = ({navigation}) => {
  const [PassHide, setPassHide] = useState(true);
  const [SEmail, setSEmail] = useState('');
  const [SPassword, setSPassword] = useState('');
  const signup = () => {
    navigation.navigate('Signupuser');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginTop: 50, alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              color: '#000',
              marginBottom: 20,
              fontWeight: '900',
              textShadowColor: 'rgba(0, 0, 0, 0.5)',
              textShadowOffset: {height: 4},
              textShadowRadius: 10,
            }}>
            Sign In
          </Text>
          <Text style={{color: '#000', fontSize: 14, textAlign: 'center'}}>
            Hi! Welcome back, you've been missed.
          </Text>
          <View style={styles.SignContainer}>
            <Text style={styles.LableText}>Email</Text>
            <TextInput
              value={SEmail}
              onChangeText={setSEmail}
              style={styles.InpText}
              placeholder="example@gmail.com"></TextInput>
            <Text style={styles.LableText}>Password</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={SPassword}
                onChangeText={setSPassword}
                style={styles.InpText}
                placeholder="Password"
                secureTextEntry={PassHide}></TextInput>
              <TouchableOpacity
                onPress={() => {
                  PassHide === true ? setPassHide(false) : setPassHide(true);
                }}>
                <Icon
                  name={PassHide === false ? 'eye' : 'eye-off'}
                  size={25}
                  style={{color: '#000', marginLeft: -40, marginTop: 20}}
                />
              </TouchableOpacity>
            </View>
            <Text style={{color: '#999', textAlign: 'right', marginRight: 10}}>
              Forgot Password ?
            </Text>
            <TouchableNativeFeedback>
              <View style={styles.SignBtn}>
                <Text style={styles.BtnText}>Sign In</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{color: '#999', fontSize: 17}}>
                Don't have an account yet?{' '}
              </Text>
              <TouchableOpacity onPress={signup}>
                <Text style={{color: '#D885A3'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  LableText: {
    color: '#000',
    marginLeft: 20,
  },
  InpText: {
    width: 330,
    height: 60,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    fontSize: 18,
    padding: 20,
    paddingLeft: 30,
  },
  SignBtn: {
    width: 230,
    height: 60,
    backgroundColor: '#6739FF',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
  },
  BtnText: {
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
  },
  SignContainer: {
    width: '100%',
    height: 450,
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
});
