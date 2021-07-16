import * as React from "react";
import { ImageProps, Image, View } from "react-native";
import Reanimated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const AnimatedImage = Reanimated.createAnimatedComponent(Image);

export const ImageZoom: React.FC<ImageProps> = ({ ...rest }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const containerSize = useSharedValue({ width: 0, height: 0 });

  const pinchStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  const onPinch = useAnimatedGestureHandler<
    PinchGestureHandlerGestureEvent,
    { cx: number; cy: number }
  >({
    onStart: (evt, ctx) => {
      ctx.cx = evt.focalX - containerSize.value.width / 2;
      ctx.cy = evt.focalY - containerSize.value.height / 2;
    },
    onActive: (evt, ctx) => {
      const newScale = clamp(evt.scale, 0.2, 10);

      translateX.value = ctx.cx * (1 - newScale);
      translateY.value = ctx.cy * (1 - newScale);
      scale.value = newScale;
    },
    onEnd: () => {
      translateX.value = withTiming(0);
      translateY.value = withTiming(0);
      scale.value = withTiming(1);
    },
  });

  return (
    <PinchGestureHandler onGestureEvent={onPinch}>
      <Reanimated.View
        style={pinchStyle}
        onLayout={(evt) => {
          const { width, height } = evt.nativeEvent.layout;
          containerSize.value = { width, height };
        }}
      >
        <AnimatedImage {...rest} />
      </Reanimated.View>
    </PinchGestureHandler>
  );
};

const clamp = (x: number, min: number, max: number) => {
  "worklet";

  if (x < min) return min;
  if (x > max) return max;
  return x;
};
