import * as React from "react";
import { Pressable, PressableProps } from "react-native";
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  Extrapolate,
  withTiming,
} from "react-native-reanimated";

export const CustomPressable: React.FC<PressableProps> = ({
  style,
  ...rest
}) => {
  return (
    <Pressable
      onPressIn={(evt) => {
        rest?.onPressIn?.(evt);
      }}
      onPressOut={(evt) => {
        rest?.onPressOut?.(evt);
      }}
      style={(args) => [
        typeof style === "function" ? style(args) : style,
        args.pressed && { opacity: 0.5 },
      ]}
      {...rest}
    />
  );
};

const AnimatedPressable = Reanimated.createAnimatedComponent(Pressable);
