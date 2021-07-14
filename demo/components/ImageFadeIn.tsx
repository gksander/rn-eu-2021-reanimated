import * as React from "react";
import { Image, ImageProps } from "react-native";
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const AnimatedImage = Reanimated.createAnimatedComponent(Image);

const ImageFadeIn: React.FC<ImageProps> = ({ style, onLoad, ...rest }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const imageStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isLoaded ? 1 : 0, { duration: 400 }),
      transform: [
        {
          scale: withTiming(isLoaded ? 1 : 0.8, { duration: 300 }),
        },
      ],
    };
  });

  return (
    <View>
      <AnimatedImage
        style={[imageStyle, style]}
        onLoad={(evt) => {
          onLoad?.(evt);
          setIsLoaded(true);
        }}
        {...rest}
      />
      {!isLoaded && (
        <View style={[StyleSheet.absoluteFill, styles.spinner]}>
          <ActivityIndicator color="#000" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageFadeIn;
