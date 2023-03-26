import React, { FC } from 'react'
import {
  View, 
  Text,
  StyleSheet,
  Pressable
} from 'react-native';
import { useAppDispatch } from '@store/store';
import { updateAppLoadStatus } from '@actions/appManagerActions';

interface Props {
  navigation: any
}

const Login: FC<Props> = ({ navigation }) : JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.mainContainer}>
      <Text>Login Screen</Text>
      <Pressable onPress={() => dispatch(updateAppLoadStatus({ navStack: 'postLogin' }))}>
        <Text>Simulate Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text>Go to Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Login;