import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MTextButton} from '../base/components/MTextButton';
import {MTextView} from '../base/components/MTextView';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../redux_store/actions/counterActions';

export const ScreenDummy2 = props => {
  const {navigation} = props;
  const {counter} = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <MTextButton onPress={() => dispatch(increment())} text={'Increment'} />

        <MTextView text={counter} />

        <MTextButton onPress={() => dispatch(decrement())} text={'Decrement'} />
      </View>

      <MTextButton onPress={() => navigation.goBack()} text={'Go Back'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    margin: 10,
  },
});
