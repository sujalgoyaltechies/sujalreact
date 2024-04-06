import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash1 from './src/screen/Splash1';
import Splash2 from './src/screen/Splash2';
import Splash3 from './src/screen/Splash3';
import Splash4 from './src/screen/Splash4';
import HomeDash from './src/user/HomeDash';
import Screen6 from './src/screen/Screen6';
import SignupTrain from './src/user/SignupTrain';
import SignIn from './src/user/SignIn';
import SignupUser from './src/user/SignupUser';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="1"
          component={Splash1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="2"
          component={Splash2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="3"
          component={Splash3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="4"
          component={Splash4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="6"
          component={Screen6}
          options={{headerShown: false}}

        />
        <Stack.Screen
          name="userdash"
          component={HomeDash}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Signuptrain"
          component={SignupTrain}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signupuser"
          component={SignupUser}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
