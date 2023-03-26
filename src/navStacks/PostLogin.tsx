import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DailyFeed } from '@screens/index';

interface Props {};
const Stack = createStackNavigator();

const PostLoginNavStack: FC<Props> = () : JSX.Element => {
  return (
    <Stack.Navigator 
      screenOptions={{
        animationEnabled: false,
        headerShown: false 
      }}
    >
      <Stack.Screen name='DailyFeed' component={DailyFeed} />
    </Stack.Navigator>
  );
};

export default PostLoginNavStack;