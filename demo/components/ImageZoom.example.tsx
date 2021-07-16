import * as React from "react";
import { SafeAreaView, View } from "react-native";
import { ImageZoom } from "./ImageZoom";

const HorseImg = require("../img/horse.jpeg");

export const ImageZoomExample: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ width: "100%", aspectRatio: 1 }}>
        <ImageZoom
          source={HorseImg}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
      </View>
    </SafeAreaView>
  );
};
