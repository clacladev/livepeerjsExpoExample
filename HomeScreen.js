import { Player, useAsset } from "@livepeer/react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const assetId = 'd29f9566-6630-471f-9b71-bc7824039e72'

const HomeScreen = () => {
  const { data: asset, isLoading } = useAsset({ assetId });
  if (isLoading) return <Text>Loading...</Text>;
  return (
    <View style={styles.container}>
      <Text>Asset: {asset.name}</Text>
      <Player playbackId={asset.playbackId} />
    </View>
  );
};

export default HomeScreen;
