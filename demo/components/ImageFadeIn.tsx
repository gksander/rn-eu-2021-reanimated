import * as React from "react";
import { Image, ImageProps } from "react-native";
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const ImageFadeIn: React.FC<ImageProps> = ({ style, onLoad, ...rest }) => {
  return (
    <View>
      <Image style={style} {...rest} />
    </View>
  );
};

const AnimatedImage = Reanimated.createAnimatedComponent(Image);

const styles = StyleSheet.create({
  spinner: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageFadeIn;
