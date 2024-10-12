import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {BellIcon, BlueIcon} from '../assets/svgs';
import useToast from '../hooks/useToast';
import {useAppStore} from '../store/appStore';

const AppHeader = () => {
  const toast = useToast();
  const {setAll} = useAppStore(state => state);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imgbox}
        onPress={() => {
          setAll({loggedIn: false});
          toast.show('my_success', {
            type: 'my_success',
            data: {
              title: 'Log out successful:',
              message:
                'Your intentions are clear! Unfortunately, we cannot open your profile without a signed agreement.',
            },
          });
        }}>
        <Image
          source={require('../assets/pngs/man.png')}
          width={40}
          height={40}
        />
      </TouchableOpacity>
      <BlueIcon />
      <TouchableOpacity
        style={styles.bellbox}
        onPress={() =>
          toast.show('my_success', {
            type: 'my_success',
            data: {
              title: 'Message:',
              message:
                'Your intentions are clear! Unfortunately, the notifications does not liked to be pressed.',
            },
          })
        }>
        <BellIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  imgbox: {
    width: 40,
    height: 40,
    borderRadius: 30,
    overflow: 'hidden',
  },
  bellbox: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#F4F2F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppHeader;
