import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CustomPressable } from "./CustomPressable";
import ImageFadeIn from "./ImageFadeIn";
const BirdImg = require("../img/bird.jpeg");

type CustomPressableExampleProps = {};

export const CustomPressableExample: React.FC<CustomPressableExampleProps> =
  () => {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <CustomPressable style={styles.pressableContainer} onPress={() => null}>
          <View>
            <ImageFadeIn source={BirdImg} style={styles.image} />
          </View>
          <View style={{ width: 10 }} />
          <View>
            <Text style={styles.titleText}>This is a title.</Text>
            <Text style={styles.subtitleText}>This is some subtitle.</Text>
          </View>
        </CustomPressable>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  pressableContainer: {
    padding: 10,
    backgroundColor: "lightgray",
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
    resizeMode: "cover",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 28,
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: "300",
  },
});
