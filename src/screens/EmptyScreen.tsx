import React, {useState, useEffect, useRef} from 'react';
import {View, Image, Animated, Text, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';

const EmptyScreen = ({}) => {
  const route = useRoute();
  const [isExpanded, setIsExpanded] = useState(false);
  const [bounceAnim] = useState(new Animated.Value(0));
  const bounceHeight = 20;
  const sizeAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    if (isExpanded) {
      Animated.timing(sizeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(sizeAnim, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: bounceHeight,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          color: 'black',
        }}>
        "{route.name}" Page
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <Animated.Image
          source={require('../assets/pngs/manthinking.png')}
          style={{
            width: 300,
            height: 300,
            transform: [{translateY: bounceAnim}, {scale: sizeAnim}],
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          color: 'black',
          marginTop: 50,
        }}>
        Joshua and Risevest
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'black',
          fontSize: 20,
          textAlign: 'center',
        }}>
        CAN change the World
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 14,
          textAlign: 'center',
          color: 'black',
          marginTop: 20,
        }}>
        Want to see a trick? Click the image 😃
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontSize: 14,
          textAlign: 'center',
          color: 'black',
          marginTop: 20,
          paddingHorizontal: '5%',
        }}>
        (Due to insufficient time, I could not develop other screens. Whilst you
        might have a lot of questions. I want to point that this test does not
        reveal my true strength but highlights that even though I saw the email
        late, I still had the ability to deliver something. I await your
        feedback regardless. Thanks)
      </Text>
    </View>
  );
};

export default EmptyScreen;
