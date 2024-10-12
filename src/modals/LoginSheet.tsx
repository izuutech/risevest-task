import React, {useEffect, useMemo, useState} from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {BottomSheetModal, useBottomSheetModal} from '@gorhom/bottom-sheet';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import {ChevronIcon} from '../assets/svgs';
import {useNavigation} from '@react-navigation/native';
import {renderBottomSheetBackdrop} from './Backdrop';
import {useAppStore} from '../store/appStore';
import useToast from '../hooks/useToast';

interface BlockBottomSheetProps {
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
  closeBottomSheet: () => void;
}

const LoginSheet = ({
  bottomSheetModalRef,
  closeBottomSheet,
}: BlockBottomSheetProps) => {
  const {setAll} = useAppStore(state => state);
  const [form, setForm] = useState({username: '', password: ''});
  const navigation = useNavigation<any>();
  const toast = useToast();
  const blockSnapPoints = useMemo(() => ['20%', '50%', '60%', '85%'], []);

  const loginEnabled = useMemo(() => {
    return form.username && form.password;
  }, [form]);
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      name={'NotificationMenuSheet'}
      index={3}
      snapPoints={blockSnapPoints}
      handleIndicatorStyle={styles.bottomSheetIndicatorStyle}
      backgroundStyle={{
        borderRadius: 30,
      }}
      backdropComponent={props => renderBottomSheetBackdrop(props, 0.5)}
      onChange={index => {
        if (index < 0) {
          closeBottomSheet();
        }
      }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <TouchableOpacity onPress={closeBottomSheet} style={styles.cancelbox}>
            <ChevronIcon />
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.header}>Login</Text>
          <Text style={styles.subtitle}>
            Please enter your First, Last name and your phone number in order to
            register
          </Text>
          <View style={styles.space} />
          <AppInput
            title="Username/Email"
            value={form.username}
            onChangeText={text => setForm(prev => ({...prev, username: text}))}
          />
          <AppInput
            title="Password"
            isPassword
            value={form.password}
            onChangeText={text => setForm(prev => ({...prev, password: text}))}
          />
          <AppButton
            title="Login"
            backgroundColor="#2F50C1"
            textColor={'white'}
            disabled={!loginEnabled}
            containerStyle={styles.btn}
            onPress={() => {
              toast.show('my_success', {
                type: 'my_success',
                data: {
                  title: 'Message:',
                  message: 'Welcome my geeeee',
                },
              });
              closeBottomSheet();
              setAll({loggedIn: true});
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  bottomSheetIndicatorStyle: {
    backgroundColor: '#F4F4F4',
    margin: 0,
    padding: 0,
    height: 5,
    width: 46,
  },
  container: {
    flex: 1,
    marginVertical: '2.5%',
    paddingHorizontal: '5%',
    width: '100%',
    alignSelf: 'center',
  },
  cancelbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cancel: {
    color: '#4561DB',
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  header: {
    color: 'black',
    fontFamily: 'titleFont',
    fontSize: 33,
    paddingVertical: 10,
    fontWeight: '600',
  },
  subtitle: {
    color: '#757281',
    fontFamily: 'titleFont',
    fontSize: 15,
  },
  space: {
    height: 30,
  },
  btn: {
    marginTop: 180,
    width: '100%',
  },
});

export default LoginSheet;
