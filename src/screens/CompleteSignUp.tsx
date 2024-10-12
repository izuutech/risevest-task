import React, {useEffect, useRef} from 'react';
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';
import {colors} from '../resources/colors';
import {CompleteIcon} from '../assets/svgs';
import AppButton from '../components/AppButton';

const CompleteSignUp = ({navigation}: any) => {
  const scaleValue = useRef(new Animated.Value(1)).current; // Initial scale of 1

  useEffect(() => {
    // Create an infinite loop for the beating heart effect
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2, // Expand the icon
          duration: 500, // Duration of expansion
          useNativeDriver: true, // Enable native driver for performance
        }),
        Animated.timing(scaleValue, {
          toValue: 1, // Return to normal size
          duration: 500, // Duration of contraction
          useNativeDriver: true, // Enable native driver for performance
        }),
      ]),
    ).start();
  }, [scaleValue]);

  return (
    <View style={styles.container}>
      {/* Animated view wrapping the icon */}
      <Animated.View style={{transform: [{scale: scaleValue}]}}>
        <CompleteIcon />
      </Animated.View>
      <Text style={styles.h2}>You just created your Rise account</Text>
      <Text style={styles.caption}>Welcome to Rise, let’s take you home</Text>
      <AppButton
        title="Done"
        onPress={() => navigation.navigate('EmptyScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 150 : 100,
    paddingHorizontal: '5%',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text_main,
    textAlign: 'center',
    width: '60%',
    marginTop: 50,
    marginBottom: 10,
  },
  caption: {
    color: colors.greyMain,
    marginBottom: 250,
    fontSize: 16,
    textAlign: 'center',
    width: '60%',
  },
});

export default CompleteSignUp;
