import React, {ReactNode} from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from '../resources/colors';

const AppButton = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  containerStyle,
  disabled,
  leftIcon,
}: {
  title: string;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  backgroundColor?: ColorValue | undefined;
  textColor?: ColorValue | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  leftIcon?: ReactNode;
}) => {
  return (
    <TouchableOpacity
      onPress={disabled ? () => {} : onPress}
      style={[
        styles.container,
        {
          backgroundColor: disabled
            ? colors.teal1Transparent
            : backgroundColor || colors.teal1,
        },
        containerStyle,
      ]}>
      {leftIcon}
      <Text
        style={[
          styles.text,
          {color: disabled ? colors.white : textColor || colors.white},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default AppButton;
