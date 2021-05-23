import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {MTextView} from './MTextView';
import ColorTheme from '../ColorTheme';
import FontTheme from '../FontTheme';
import strings from '../lang';

export const MTextButton = props => {
  const {onPress, text, textStyle, loading, containerStyle} = props;

  if (loading) {
    return (
      <View style={{...containerStyle, ...styles.container}}>
        <ActivityIndicator size={'small'} color={ColorTheme.disabled} />
        <MTextView text={strings.please_wait} textStyle={styles.waitText} />
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{...containerStyle}}>
        <MTextView
          text={text}
          textStyle={{...styles.buttonText, ...textStyle}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  waitText: {
    fontSize: 10,
    fontFamily: FontTheme.MEDIUM,
    color: ColorTheme.disabled,
  },
  buttonText: {
    fontSize: 12,
    color: '#1C66C9',
    fontFamily: FontTheme.MEDIUM,
  },
});
