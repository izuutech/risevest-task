import React, {useEffect, useMemo, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {BottomSheetModal, useBottomSheetModal} from '@gorhom/bottom-sheet';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import {ChevronIcon} from '../assets/svgs';
import {useNavigation} from '@react-navigation/native';
import FilterTab from '../components/FilterTab';
import {renderBottomSheetBackdrop} from './Backdrop';

interface BlockBottomSheetProps {
  bottomSheetModalRef: React.RefObject<BottomSheetModalMethods>;
  closeBottomSheet: () => void;
}

const FilterSheet = ({
  bottomSheetModalRef,
  closeBottomSheet,
}: BlockBottomSheetProps) => {
  const [form, setForm] = useState({username: '', password: ''});
  const navigation = useNavigation<any>();
  const blockSnapPoints = useMemo(() => ['10%', '20%', '30%', '45%'], []);

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
      <View style={styles.container}>
        <View style={styles.headerBox}>
          <TouchableOpacity onPress={closeBottomSheet} style={styles.cancelbox}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.header}>Filters</Text>
          <TouchableOpacity onPress={closeBottomSheet} style={styles.cancelbox}>
            <Text style={styles.cancel}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hP}>
          <Text style={styles.subtitle}>SHIPMENT STATUS</Text>
          <View style={styles.space} />
          <View style={styles.filters}>
            <FilterTab title="Received" />
            <FilterTab title="Putaway" />
            <FilterTab title="Delivered" />
            <FilterTab title="Canceled" />
            <FilterTab title="Rejected" />
            <FilterTab title="Lost" />
            <FilterTab title="On Hold" />
          </View>
        </View>
      </View>
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
    width: '100%',
    alignSelf: 'center',
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: '5%',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EAE7F2',
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
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    color: '#757281',
    fontFamily: 'titleFont',
    fontSize: 15,
  },
  hP: {
    paddingHorizontal: '5%',
  },
  space: {
    height: 30,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});

export default FilterSheet;
