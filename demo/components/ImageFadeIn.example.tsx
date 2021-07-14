import * as React from "react";
import { FlatList, ListRenderItem, SafeAreaView, View } from "react-native";
import ImageFadeIn from "./ImageFadeIn";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ImageFadeInExampleProps = {};

export const ImageFadeInExample: React.FC<ImageFadeInExampleProps> = () => {
  const insets = useSafeAreaInsets();

  return (
    <FlatList
      data={ELS}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={keyExtractor}
      contentContainerStyle={{ paddingTop: insets.top }}
    />
  );
};

const renderItem: ListRenderItem<number> = () => <Item />;
const keyExtractor = (item: number) => `${item}`;

const Item: React.FC = () => {
  const sig = React.useRef(Math.ceil(1000 * Math.random())).current;
  return (
    <View style={{ flex: 0.5, aspectRatio: 1 }}>
      <ImageFadeIn
        source={{
          uri: `https://source.unsplash.com/random/480x480?sig=${sig}`,
        }}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      />
    </View>
  );
};

const ELS = Array(60)
  .fill(null)
  .map((_, i) => i);
