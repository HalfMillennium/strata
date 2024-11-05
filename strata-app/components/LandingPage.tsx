import React, {useState, useRef} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { SUPPORTED_PLATFORMS } from './utils';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import * as Haptics from 'expo-haptics';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type LandingPageProps = {
  onConnect?: (platform: string) => void; // Function to handle connecting to a platform
};

export interface SupportedAccounts {
  [key: string]: boolean;
  facebook: boolean;
  instagram: boolean;
  youtube: boolean;
}

export const LandingPage: React.FC<LandingPageProps> = () => {
  const bounceValue = useRef(new Animated.Value(1)).current;
  const [connectedAccounts, setConnectedAccounts] = useState<SupportedAccounts>({
    facebook: false,
    instagram: false,
    youtube: false
  });
  return (
    <View style={styles.container}>
      <View style={{width: "100%", justifyContent: 'center', alignItems: 'center', gap: 15}}>
      <Animated.Image 
              style={{width: 100, height: 100, transform: [{ scale: bounceValue }]}} source={{ uri: "https://i.ibb.co/hK27TqV/Untitled-design-1.png" }}
            />
        <Image  />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.welcomeText}>Welcome to Strata.</Text>
          <Text style={styles.infoText}>Connect an account to get started.</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        {SUPPORTED_PLATFORMS.map((platform) => (
          <SocialConnectItem
            key={platform.title}
            platformIconUrl={platform.logoUrl}
            platformLabel={platform.title}
            platformColor={platform.platformColor}
            isConnected={connectedAccounts[platform.title.toLowerCase()]}
          />
        ))}
      </View>
    </View>
  );
};

interface SocialConnectItemProps {
  platformIconUrl: string,
  platformLabel: string,
  platformColor: string,
  isConnected?: boolean
}
const SocialConnectItem: React.FC<SocialConnectItemProps> = ({ platformIconUrl, platformLabel, platformColor, isConnected }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
{!isConnected && <TouchableOpacity 
      style={styles.listItem}
      onPress={() => {
        Haptics.impactAsync();
        navigation.navigate('MainFeed')
      }}
    >
      <View style={{flex: 1, width: "20%", height: "100%", backgroundColor: platformColor, padding: 8, alignItems: 'center', borderTopLeftRadius: 5, borderBottomStartRadius: 5}}>
        <Image 
          source={{ uri: platformIconUrl }} 
          style={styles.logo}
        />
      </View>
      <Text style={[styles.listItemText, {flex: 10, justifyContent: 'flex-start'}]}>CONNECT {platformLabel.toUpperCase()} ACCOUNT</Text>
    </TouchableOpacity>}
    {isConnected && <TouchableOpacity 
      style={[styles.listItem, {backgroundColor: 'green'}]}
      onPress={() => {
        Haptics.selectionAsync();
        navigation.navigate('MainFeed')
      }}
    >
      <View style={{flex: 1, width: "20%", height: "100%", backgroundColor: platformColor, padding: 8, alignItems: 'center', borderTopLeftRadius: 5, borderBottomStartRadius: 5}}>
        <MaterialCommunityIcons name="check" size={24} color="white" />
      </View>
      <Text style={[styles.listItemText, {flex: 10, justifyContent: 'flex-start', color: 'white'}]}>{platformLabel.toUpperCase()} ACCOUNT CONNECTED</Text>
    </TouchableOpacity>}
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 20,
    height: 20,
    borderRadius: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
    textAlign: 'center',
  },
  listContainer: {
    width: '85%',
    alignItems: 'center',
  },
  listItem: {
    width: '100%',
    backgroundColor: '#212121',
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  listItemText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '400',
    marginHorizontal: 3,
    letterSpacing: 1
  },
});
