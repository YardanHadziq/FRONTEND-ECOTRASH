import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'lightgray',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: 'white', // Set background color to white
          shadowColor: '#000', // Add shadow color
          shadowOffset: { width: 0, height: 2 }, // Shadow offset
          shadowOpacity: 0.25, // Shadow opacity
          shadowRadius: 3.84, // Shadow radius
          elevation: 5, // Elevation for Android
          ...Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={35} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="qris"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: '#4CAF50',
                borderRadius: 15,
                padding: 10,
              }}
            >
              <Image
                source={require('../../assets/qris.png')}
                style={{ width: 28, height: 28, tintColor: color }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chatroom"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/chatroom.png')}
              style={{ width: 32, height: 32, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
