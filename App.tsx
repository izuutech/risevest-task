/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {ToastProvider} from 'react-native-toast-notifications';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView edges={['top']} style={backgroundStyle}>
        <ToastProvider
          placement="top"
          renderType={{
            my_success: toast => {
              const message = toast.data.message;
              const title = toast.data.title;
              return (
                <View
                  style={{
                    padding: 15,
                    backgroundColor: '#E6F6EA',
                    borderWidth: 1,
                    borderColor: '#99D9A9',
                    width: '90%',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 35,
                      height: 35,
                      backgroundColor: '#C1F1CD',
                      borderRadius: 20,
                      marginRight: 5,
                      overflow: 'hidden',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: 'https://picsum.photos/400'}}
                      width={20}
                      height={20}
                      style={{borderRadius: 10}}
                    />
                  </View>
                  <View style={{width: '80%'}}>
                    <Text
                      style={{
                        color: '#06A22D',
                        fontWeight: 'bold',
                      }}>
                      {title}
                    </Text>
                    <Text style={{color: '#30B251'}}>{message}</Text>
                  </View>
                </View>
              );
            },
          }}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <BottomSheetModalProvider>
            <Navigation />
          </BottomSheetModalProvider>
        </ToastProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
