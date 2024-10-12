import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

const renderBottomSheetBackdrop = (
  props: BottomSheetBackdropProps,
  opacity = 0,
) => (
  <BottomSheetBackdrop
    {...props}
    style={[props.style]}
    disappearsOnIndex={-1}
    appearsOnIndex={1}
    opacity={opacity}
    pressBehavior="close"
  />
);

export {renderBottomSheetBackdrop};
