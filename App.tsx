import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {PlansProvider} from './src/context';
import Splash from './src/pages/Splashscreen';
import Onboarding from './components/Onboarding';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import Home from './src/pages/BottomTab/Home';
import LearnScreen from './src/pages/BottomTab/Learn';
import SimScreen from './src/pages/BottomTab/Simulation/Page1';
import ProfileScreen from './src/pages/BottomTab/Profile';
import FlashMessage from 'react-native-flash-message';
import Start from './src/pages/Start';
import EditInfoScreen from './src/pages/Edit';
import ChangePasswordScreen from './src/pages/ChangePassword';
import AboutScreen from './src/pages/About';
import News from './src/pages/BottomTab/Home/News';
import Reviews from './src/pages/BottomTab/Home/Reviews';
import Recommended from './src/pages/BottomTab/Home/Recommended';
import Plans from './src/pages/BottomTab/Simulation/Page2';
import BareboneSelection from './src/pages/BottomTab/Simulation/Page3';
import SelectionSwitch from './src/pages/BottomTab/Simulation/page4';
import SelectionKey from './src/pages/BottomTab/Simulation/page5';
import SelectionAdditional from './src/pages/BottomTab/Simulation/page6';
import PersonalInfo from './src/pages/Personal_Info';
import PlanDetail from './src/pages/PlanDetail';
import './src/config/firebase';
import {UserProvider} from './src/context/UserContext';
import React, {useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {VerifyEmail} from './src/context/VerifyEmail';
import ResetPassword from './src/pages/ResetPassword';
import Privacy from './src/pages/PrivacySettings';

const stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  return (
    <UserProvider>
      <PlansProvider>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen
              name="Splashscreen"
              component={Splash}
              options={{headerShown: false}}
            />
            <stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{headerShown: false}}
            />
            <stack.Screen
              name="Start"
              component={Start}
              options={{headerShown: false}}
            />
            <stack.Screen
              name="Plans"
              component={Plans}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
            <stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="News"
              component={News}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="Reviews"
              component={Reviews}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="Recommended"
              component={Recommended}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="Learn"
              component={LearnScreen}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="Simulation"
              component={SimScreen}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="Edit"
              component={EditInfoScreen}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="ChangePassword"
              component={ChangePasswordScreen}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="About"
              component={AboutScreen}
              options={{headerShown: false, animation: 'none'}}
            />

            <stack.Screen
              name="Page3"
              component={BareboneSelection}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="Page4"
              component={SelectionSwitch}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="Page5"
              component={SelectionKey}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="Page6"
              component={SelectionAdditional}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="PlanDetails"
              component={PlanDetail}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="VerifyEmail"
              component={VerifyEmail}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="PersonalInfo"
              component={PersonalInfo}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{headerShown: false, animation: 'none'}}
            />
            <stack.Screen
              name="Privacy"
              component={Privacy}
              options={{headerShown: false, animation: 'none'}}
            />
          </stack.Navigator>
          <FlashMessage position="top" />
        </NavigationContainer>
      </PlansProvider>
    </UserProvider>
  );
};

export default App;
