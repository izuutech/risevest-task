import React, {useCallback, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ColorValue,
  TouchableOpacity,
} from 'react-native';
import OnboardingSwiper, {
  NextButtonProps,
  SkipButtonProps,
} from 'react-native-onboarding-swiper';
import {colors} from '../resources/colors';
import {BackArrowIcon, FrontArrowIcon} from '../assets/svgs';
import AppButton from '../components/AppButton';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation<any>();
  const onboardingRef = useRef<OnboardingSwiper>(null);

  const PrevButton: React.FC<{color: ColorValue; page: number}> = useCallback(
    ({color, page}) => {
      return (
        <TouchableOpacity style={styles.prev}>
          <BackArrowIcon stroke={color} strokeWidth={2} />
        </TouchableOpacity>
      );
    },
    [],
  );
  const NextButton: React.FC<{color: ColorValue; page: number}> = useCallback(
    ({color, page}) => {
      return (
        <TouchableOpacity
          style={styles.next}
          onPress={() => onboardingRef?.current?.goNext()}>
          <Text style={{color}}>Next</Text>
          <FrontArrowIcon style={styles.ml2} stroke={color} strokeWidth={2} />
        </TouchableOpacity>
      );
    },
    [],
  );

  const _title = useCallback(
    ({title, color}: {title: string; color: ColorValue}) => {
      return <Text style={[styles.title, {color}]}>{title}</Text>;
    },
    [],
  );
  const _subtitle = useCallback(
    ({
      subtitle,
      color,
      page,
    }: {
      subtitle: string;
      color: ColorValue;
      page: number;
    }) => {
      return (
        <View style={styles.subbox}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {page < 3 ? (
            <View style={styles.paginationbox}>
              <PrevButton color={color} page={page} />
              <NextButton color={color} page={page} />
            </View>
          ) : (
            <View style={styles.ctabox}>
              <AppButton
                title="Sign Up"
                backgroundColor={colors.main_green}
                textColor={colors.white}
                onPress={() => navigation.navigate('SignUp')}
              />
              <AppButton
                title="Sign In"
                backgroundColor={colors.grey}
                textColor={colors.main_green}
                containerStyle={styles.signin}
              />
            </View>
          )}
        </View>
      );
    },
    [],
  );

  return (
    // <View style={styles.mainContainer}>
    <OnboardingSwiper
      ref={onboardingRef}
      containerStyles={{
        width: '100%',
        paddingHorizontal: '10%',
        justifyContent: 'center',
        position: 'relative',
      }}
      showSkip={false}
      showPagination={false}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: colors.light_orange,
          image: (
            <Image
              source={require('../assets/pngs/onboard1.png')}
              style={styles.image}
            />
          ),
          title: _title({title: 'Quality assets', color: colors.main_orange}),
          subtitle: _subtitle({
            subtitle:
              'DRise invests your money into the best dollar investments around the world.',
            color: colors.main_orange,
            page: 1,
          }),
        },
        {
          backgroundColor: colors.light_pink,
          image: <Image source={require('../assets/pngs/onboard2.png')} />,
          title: _title({
            title: 'Superior Selection',
            color: colors.main_pink,
          }),
          subtitle: _subtitle({
            subtitle:
              'Our expert team and intelligent algorithms select assets that beat the markets.',
            color: colors.main_pink,
            page: 2,
          }),
        },
        {
          backgroundColor: colors.light_green,
          image: <Image source={require('../assets/pngs/onboard3.png')} />,
          title: _title({
            title: 'Better Performance',
            color: colors.main_green,
          }),
          subtitle: _subtitle({
            subtitle:
              'You earn more returns, achieve more of your financial goals and protect your money from devaluation.',
            color: colors.main_green,
            page: 3,
          }),
        },
      ]}
    />
    // </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    backgroundColor: '#2F50C1',
    width: '100%',
  },
  image: {
    width: '80%',
    paddingTop: '40%',
    height: undefined,
    // height,
  },
  btn: {
    position: 'absolute',
    bottom: 100,
  },
  title: {
    textAlign: 'left',
    width: '100%',
    fontSize: 19,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  subbox: {
    width: '100%',
  },
  subtitle: {
    textAlign: 'left',
    width: '100%',
  },
  paginationbox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 100,
  },
  prev: {
    backgroundColor: colors.grey,
    paddingHorizontal: '5%',
    paddingVertical: 10,
  },
  next: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.grey,
    paddingHorizontal: '10%',
    paddingVertical: 10,
  },
  ml2: {
    marginLeft: 4,
  },
  ctabox: {
    marginTop: 40,
  },
  signin: {
    marginTop: 10,
  },
});

export default Onboarding;
