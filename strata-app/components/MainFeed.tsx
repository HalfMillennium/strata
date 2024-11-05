import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import SocialMediaContentItem from "./SocialMediaContentItem";
import { SUPPORTED_PLATFORMS, SupportedAccounts } from "./utils";
import * as Haptics from "expo-haptics";

export interface ContentItem {
  id: string;
  title: string;
  imageUrl: string;
  platformIconUrl: string;
  platformColor: string;
  postDetails: {
    likes: number;
    comments: number;
    author: string;
    authorProfilePic: string;
    videoUrl?: string;
    description?: string;
    images?: string[];
    createdAt: string;
  };
}

const content: ContentItem[] = [
  {
    id: "1",
    title: "Entry 1",
    imageUrl: "https://example.com/entry1.jpg",
    platformIconUrl: SUPPORTED_PLATFORMS[0].logoUrl,
    platformColor: SUPPORTED_PLATFORMS[0].platformColor,
    postDetails: {
      likes: 120,
      comments: 30,
      author: "Author 1",
      authorProfilePic: "https://example.com/author1.jpg",
      createdAt: "2023-10-01T12:00:00Z",
    }
  },
  {
    id: "2",
    title: "Entry 2",
    imageUrl: "https://example.com/entry2.jpg",
    platformIconUrl: SUPPORTED_PLATFORMS[1].logoUrl,
    platformColor: SUPPORTED_PLATFORMS[1].platformColor,
    postDetails: {
      likes: 200,
      comments: 50,
      author: "Author 2",
      authorProfilePic: "https://example.com/author2.jpg",
      createdAt: "2023-10-02T12:00:00Z",
    }
  },
  {
    id: "3",
    title: "Entry 3",
    imageUrl: "https://example.com/entry3.jpg",
    platformIconUrl: SUPPORTED_PLATFORMS[2].logoUrl,
    platformColor: SUPPORTED_PLATFORMS[2].platformColor,
    postDetails: {
      likes: 300,
      comments: 70,
      author: "Author 3",
      authorProfilePic: "https://example.com/author3.jpg",
      createdAt: "2023-10-03T12:00:00Z",
    }
  },
];

export const MainFeed: React.FC = () => {
  const navigation = useNavigation();
  const [connectedAccounts, setConnectedAccounts] = useState<SupportedAccounts>(
    {
      facebook: true,
      instagram: true,
      youtube: false,
    }
  );
  const connectedAccountsList = Object.keys(connectedAccounts)
    .filter((account) => connectedAccounts[account])
    .join(", ");

  return (
    <View style={styles.container}>
      <SafeAreaView style={{
        alignItems: "center",
      }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              Haptics.selectionAsync();
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={24} color="#212121" />
          </TouchableOpacity>
          <Text style={[styles.headerText, { width: 100, color: "black" }]}>
            Latest Content
          </Text>
        </View>
        <View>
          <View>
            <Text
              style={{
                color: "#21212180",
                fontSize: 14,
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Connected accounts: {connectedAccountsList}
            </Text>
          </View>
        </View>
        <FlatList
          data={content}
          style={{ width: "100%", paddingHorizontal: 20}}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }: { item: ContentItem }) => (
            <SocialMediaContentItem contentItem={item} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  backButton: {
    marginRight: 10,
    padding: 15,
  },
  headerText: {
    color: "#212121",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginRight: 60
  },
  listContent: {
    paddingTop: 80, // To ensure the header is not overlapped
  },
  entryCard: {
    width: "100%",
    marginBottom: 20,
  },
  entryImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  entryTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});

export default MainFeed;
