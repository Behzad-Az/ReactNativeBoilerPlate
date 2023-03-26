import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Login,
  Register
} from '@screens/index'

interface Props {};
const Stack = createStackNavigator();

const PreLoginNavStack: FC<Props> = () : JSX.Element => {
  return (
    <Stack.Navigator 
      screenOptions={{
        animationEnabled: false,
        headerShown: false 
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
};

export default PreLoginNavStack;