import React, {useMemo, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {colors} from '../resources/colors';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import {CheckCircleIcon, CheckIcon} from '../assets/svgs';

const SignUp = ({navigation}: any) => {
  const [form, setForm] = useState({email: '', password: ''});

  const isLongEnough = useMemo(() => {
    return form.password.length >= 8;
  }, [form]);

  const hasOneSpecialCharacter = useMemo(() => {
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;

    return specialCharacterRegex.test(form.password);
  }, [form.password]);

  const hasUpperCase = useMemo(() => {
    const uppercaseRegex = /[A-Z]/;
    return uppercaseRegex.test(form.password);
  }, [form.password]);

  const canSubmit = useMemo(() => {
    return hasUpperCase && hasOneSpecialCharacter && isLongEnough;
  }, [hasUpperCase, hasOneSpecialCharacter, isLongEnough]);
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Create an account</Text>
      <Text style={styles.caption}>
        Start building your dollar-denominated investment portfolio
      </Text>
      <AppInput
        placeholder="Email address"
        style={styles.input}
        onChangeText={val => setForm(prev => ({...prev, email: val}))}
      />
      <AppInput
        placeholder="Password"
        isPassword
        onChangeText={val => setForm(prev => ({...prev, password: val}))}
      />
      <View style={styles.checksbox}>
        <View style={styles.singlecheck}>
          {isLongEnough ? (
            <CheckIcon style={styles.check} />
          ) : (
            <CheckCircleIcon style={styles.check} />
          )}
          <Text style={styles.condition}>Minimum of 8 characters</Text>
        </View>
        <View style={styles.singlecheck}>
          {hasUpperCase ? (
            <CheckIcon style={styles.check} />
          ) : (
            <CheckCircleIcon style={styles.check} />
          )}
          <Text style={styles.condition}>One UPPERCASE character</Text>
        </View>
        <View style={styles.singlecheck}>
          {hasOneSpecialCharacter ? (
            <CheckIcon style={styles.check} />
          ) : (
            <CheckCircleIcon style={styles.check} />
          )}
          <Text style={styles.condition}>
            One unique character (e.g: !@#$%^&*?)
          </Text>
        </View>
      </View>
      <AppButton
        title="Sign Up"
        disabled={!canSubmit}
        onPress={() => navigation.navigate('CompleteSignUp')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 100 : 50,
    paddingHorizontal: '5%',
    backgroundColor: colors.white,
  },
  h2: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text_main,
    marginVertical: 10,
  },
  caption: {
    color: colors.greyMain,
    marginBottom: 50,
    fontSize: 16,
  },
  input: {
    marginVertical: 15,
  },
  checksbox: {
    width: '100%',
    marginVertical: 20,
  },
  singlecheck: {
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    marginRight: 5,
  },
  condition: {
    width: '90%',
  },
});

export default SignUp;
