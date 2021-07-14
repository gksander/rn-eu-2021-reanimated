import * as React from "react";
import { Pressable, PressableProps } from "react-native";
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  Extrapolate,
  withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Reanimated.createAnimatedComponent(Pressable);

export const CustomPressable: React.FC<PressableProps> = ({
  style,
  ...rest
}) => {
  const pressProgress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        pressProgress.value,
        [0, 1],
        [1, 0.3],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <AnimatedPressable
      onPressIn={(evt) => {
        pressProgress.value = withTiming(1, { duration: 200 });
        rest?.onPressIn?.(evt);
      }}
      onPressOut={(evt) => {
        pressProgress.value = withTiming(0, { duration: 200 });
        rest?.onPressOut?.(evt);
      }}
      style={[animatedStyle, style]}
      {...rest}
    />
  );
};
