import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MTextButton} from '../base/components/MTextButton';

export const ScreenDummy1 = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <MTextButton
        onPress={() => navigation.navigate('ScreenDummy2')}
        text={'Go to Screen 2'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
