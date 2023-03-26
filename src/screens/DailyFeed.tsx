import React, { FC } from 'react'
import {
  View, 
  Text,
  StyleSheet,
  Pressable
} from 'react-native';

import { useAppSelector } from '@store/store';

interface Props {
  navigation: any
}

const DailyFeed: FC<Props> = ({ navigation }) : JSX.Element => {
  const { navStack } = useAppSelector(state => state.appManagerReducer).appLoadStatus;
  return (
    <View style={styles.mainContainer}>
      <Text>Daily Feed</Text>
      <Pressable onPress={() => null}>
        <Text>{navStack}</Text>
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

export default DailyFeed;