import React, { FC } from 'react'
import {
  View, 
  Text,
  StyleSheet,
  Pressable
} from 'react-native';

interface Props {
  navigation: any
}

const Register: FC<Props> = ({ navigation }) : JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <Text>Register Screen</Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text>Go to Login</Text>
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

export default Register;