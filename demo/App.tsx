import React from "react";
import { ImageFadeInExample } from "./components/ImageFadeIn.example";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CustomPressableExample } from "./components/CustomPressable.example";
import { OnScrollExample } from "./components/OnScroll.example";
import { ImageZoomExample } from "./components/ImageZoom.example";

const Examples = {
  ImageFadeIn: ImageFadeInExample,
  CustomPressable: CustomPressableExample,
  OnScroll: OnScrollExample,
  ImageZoom: ImageZoomExample,
} as const;

/**
 * CHANGE ME TO CHANGE EXAMPLES
 */
const CURRENT_EXAMPLE: keyof typeof Examples = "ImageZoom";

const CURRENT_EXAMPLE_COMPONENT = Examples[CURRENT_EXAMPLE];

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <CURRENT_EXAMPLE_COMPONENT />
    </SafeAreaProvider>
  );
};

export default App;
