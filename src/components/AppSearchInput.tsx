import React from 'react';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {SearchIcon} from '../assets/svgs';

interface AppSearchInputProps extends TextInputProps {
  placeholder?: string;
}

const AppSearchInput: React.FC<AppSearchInputProps> = ({
  placeholder,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <SearchIcon />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Grey background
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
    width: '100%',
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    borderWidth: 0, // No border for the input itself
    padding: 0, // Remove padding to align with container
  },
});

export default AppSearchInput;
