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

export default SignupUser = ({navigation}) => {
  const [PassHide, setPassHide] = useState(true);
  const [AccPol, setAccPol] = useState(false);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const signuptrainer = () => {
    navigation.navigate('Signuptrain');
  };
  const handlesignIn = () => {
    navigation.navigate('Signin');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginTop: 50, alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              textAlign: 'center',
              color: '#000',
              fontWeight: '900',
            }}>
            Create Account
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 10,
              textAlign: 'center',
              marginTop: 10,
            }}>
            Fill your information below to register.{' '}
          </Text>
          <View style={styles.SignContainer}>
            <Text style={styles.LableText}>Name</Text>
            <TextInput
              value={Name}
              onChangeText={setName}
              style={styles.InpText}
              placeholder="Name"></TextInput>
            <Text style={styles.LableText}>Email</Text>
            <TextInput
              value={Email}
              onChangeText={setEmail}
              style={styles.InpText}
              placeholder="example@gmail.com"></TextInput>
            <Text style={styles.LableText}>Password</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                value={Password}
                onChangeText={setPassword}
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
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  AccPol === false ? setAccPol(true) : setAccPol(false);
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: AccPol === false ? '#fff' : '#000',
                    borderWidth: 1,
                  }}>
                  <Icon
                    name="check"
                    size={15}
                    style={{color: '#fff', margin: 1}}></Icon>
                </View>
              </TouchableOpacity>
              <Text style={{color: '#000'}}>
                {' '}
                I accept the{' '}
                <Text style={{color: '#4870FB'}}>terms and privacy policy</Text>
              </Text>
            </View>
            <TouchableNativeFeedback>
              <View style={styles.SignBtn}>
                <Text style={styles.BtnText}>Sign Up</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <TouchableOpacity onPress={signuptrainer}>
            <Text
              style={{
                textAlign: 'center',
                color: '#6739FF',
                fontSize: 20,
                marginVertical: 20,
                fontWeight: '500',
              }}>
              Become a Trainer
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{color: '#999', fontSize: 17}}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={handlesignIn}>
              <Text style={{color: '#D885A3'}}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  LableText: {
    color: '#000',
    marginLeft: 20,
    fontSize: 15,
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
    height: 530,
    justifyContent: 'space-evenly',
  },
});
