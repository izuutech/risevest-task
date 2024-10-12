import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../components/SplashScreen';
import React, {useState, useEffect} from 'react';
import Onboarding from '../screens/Onboarding';
import {useAppStore} from '../store/appStore';
import SignUp from '../screens/SignUp';
import CompleteSignUp from '../screens/CompleteSignUp';
import EmptyScreen from '../screens/EmptyScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [isLoading, setIsLoading] = useState(true);
  const {loggedIn} = useAppStore(state => state);
  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {loggedIn ? (
            <></>
          ) : (
            <React.Fragment>
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="CompleteSignUp" component={CompleteSignUp} />
              <Stack.Screen name="EmptyScreen" component={EmptyScreen} />
            </React.Fragment>
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
