import React, {FC} from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import PreLoginNavStack from './PreLogin';
import PostLoginNavStack from './PostLogin';

import { useAppSelector, useAppDispatch } from '@store/store';

interface Props {};

const AppNavStack: FC<Props> = (): JSX.Element => {
  const { appLoadStatus } = useAppSelector(state => state.appManagerReducer);
  if (appLoadStatus.navStack === 'preLogin') {
    return (
      <NavigationContainer>
          <PreLoginNavStack />
        </NavigationContainer>
    )
  }
  if (appLoadStatus.navStack === 'postLogin') {
    return (
      <NavigationContainer>
          <PostLoginNavStack />
        </NavigationContainer>
    )
  }
  return <></>;
};

export default AppNavStack;