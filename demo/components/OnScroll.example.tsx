import * as React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ImageFadeIn from "./ImageFadeIn";
import Reanimated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
const HorseImg = require("../img/horse.jpeg");

export const OnScrollExample: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          scrollEventThrottle={16}
        >
          <HorseHeaderImage />
          <View style={{ height: 32 }} />

          <Text style={styles.titleText}>Neat Horse</Text>
          <Subtitle />
          <Divider />
          <FillerContent />
        </ScrollView>
        {/* "Sticky" header! */}
        <View style={[styles.headerContainer]} pointerEvents="none">
          <HeaderContent />
        </View>
      </View>
    </SafeAreaView>
  );
};

const FADE_OFFSET = 50;

const HorseHeaderImage: React.FC = () => {
  return (
    <View style={styles.imageContainer}>
      <ImageFadeIn source={HorseImg} style={styles.image} />
    </View>
  );
};

const Subtitle: React.FC = () => (
  <Text style={styles.subtitleText}>
    This horse is really pretty neat! Fun fact about horses: they can sleep
    standing up, but they cannot breath through their mouth!
  </Text>
);

const Divider: React.FC = () => (
  <View
    style={{
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: "#bdbdbd",
      marginVertical: 16,
    }}
  />
);

const FILL = Array(30)
  .fill(null)
  .map((_, i) => i);

const FillerContent: React.FC = () => (
  <View>
    {FILL.map((i) => (
      <View key={i} style={{ marginBottom: 16 }}>
        <Text style={{ fontWeight: "bold", fontSize: 13, color: "#2f2f2f" }}>
          Filler content {i}
        </Text>
        <Text style={{ fontWeight: "300", fontSize: 12, color: "#5b5b5b" }}>
          Just adding some fill content.
        </Text>
      </View>
    ))}
  </View>
);

const HeaderContent: React.FC = () => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 32,
      paddingVertical: 16,
    }}
  >
    <ImageFadeIn
      source={HorseImg}
      style={{
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        resizeMode: "cover",
      }}
    />
    <View style={{ width: 8 }} />
    <Text
      style={{
        fontSize: 14,
        fontWeight: "bold",
      }}
    >
      Neat Horse
    </Text>
  </View>
);

const styles = StyleSheet.create({
  contentContainer: {
    padding: 32,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    resizeMode: "cover",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bdbdbd",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 13,
    fontWeight: "300",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#bdbdbd",
  },
});
