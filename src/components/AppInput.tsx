import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../resources/colors';
import {EyeOffIcon, EyeOnIcon} from '../assets/svgs';

interface AppInputProps extends TextInputProps {
  value?: string;
  isPassword?: boolean;
  onChangeText?: (text: string) => void;
}

const AppInput: React.FC<AppInputProps> = ({
  value,
  isPassword,
  onChangeText,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    if (value) {
      // If there's a value, ensure the label stays above
      Animated.timing(animatedValue, {
        toValue: 1, // Move label up
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [value]);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedValue, {
      toValue: 1, // Move label up
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animatedValue, {
        toValue: 0, // Move label down only if input is empty
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <View style={[styles.container, isFocused && styles.focusedContainer]}>
      {/* TextInput Field */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.input}
        secureTextEntry={isPassword && !showPassword} // Only hide the text if it's a password field and showPassword is false
        {...rest}
      />

      {/* Eye icon for password visibility toggle */}
      {isPassword && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconContainer}>
          {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 60, // Adjust height as needed
    justifyContent: 'center',
    borderWidth: 1, // Initial border width (thin border)
    borderColor: '#e0e0e0', // Default grey border
    position: 'relative', // To position the eye icon inside the input
  },
  focusedContainer: {
    borderColor: colors.main_green, // Green border when focused
  },
  input: {
    height: 40,
    fontSize: 16,
    borderWidth: 0, // No border for the input itself
    paddingHorizontal: 0, // Remove padding to align with label
    color: '#000', // Text color
    paddingRight: 40, // Add padding to the right so that text doesn't overlap with the icon
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    height: 24,
    width: 24,
    right: 10, // Align the icon to the right
    top: 15, // Align the icon vertically in the center of the input
  },
});

export default AppInput;
