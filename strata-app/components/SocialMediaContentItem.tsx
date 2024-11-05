import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ContentItem } from "./MainFeed";


const SocialMediaContentItem: React.FC<{contentItem: ContentItem}> = ({
contentItem
}) => {
  return (
    <View style={styles.entryCard}>
      <View
        style={{
          backgroundColor: contentItem.platformColor + "70",
          padding: 20,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          flexDirection: "row",
          gap: 10
        }}
      >
        <Image 
          source={{ uri: contentItem.platformIconUrl }} 
          style={styles.platformLogo}
        />
        <Text style={styles.entryTitle}>{contentItem.title}</Text>
      </View>
      <Image source={{ uri: contentItem.imageUrl }} style={styles.entryImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  entryCard: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#212121",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  entryImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  entryTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "semibold",
    width: "100%",
    borderRadius: 20,
  },
  platformLogo: {
    width: 20,
    height: 20,
    borderRadius: 5
  },
});

export default SocialMediaContentItem;
