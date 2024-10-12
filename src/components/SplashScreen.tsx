import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../resources/colors';
import {RiseIcon} from '../assets/svgs';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <RiseIcon style={styles.logo} />
        <Text style={styles.subtitle}>Dollar investments that</Text>
        <Text style={styles.subtitle}>help you grow </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.foottext}>All rights reserved</Text>
        <Text style={styles.foottext}> (c) 2021 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.teal1,
  },
  top: {
    width: '100%', // Initial image size
    marginVertical: 200,
    alignItems: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  subtitle: {
    color: colors.white,
    fontSize: 17,
  },
  footer: {
    alignItems: 'center',
    marginVertical: 100,
  },
  foottext: {
    color: colors.white,
  },
});

export default SplashScreen;
