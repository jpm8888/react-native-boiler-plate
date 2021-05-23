import React from 'react';
import {Text, View} from 'react-native';
import FontTheme from '../FontTheme';

export const MTextView = props => {
  const containerStyle = props.containerStyle ? props.containerStyle : {};
  const textStyle = props.textStyle ? props.textStyle : {};
  const {text} = props;

  return (
    <View style={containerStyle}>
      <Text style={{fontFamily: FontTheme.REGULAR, ...textStyle}}>{text}</Text>
    </View>
  );
};
