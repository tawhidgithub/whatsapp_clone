import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constant/image";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  icon: any;
  title: string;
  focused: boolean;
}) => {
  if (focused) {
    return (
      <View className="flex-1 justify-center items-center  ">
        <View className=" bg-[#00A884] w-20 mt-2 rounded-full items-center">
          <Image source={icon} className="size-7 mt-1.5 mb-1.5" tintColor="#fff" />
        </View>
        <View className="w-40 items-center h-5 mt-1">
        <Text className="text-white">{title}</Text>

        </View>
      </View>
    );
  }
  return (
      <View className="flex-1 justify-center items-center  ">
        <View className=" w-20 mt-2 rounded-full items-center">
          <Image source={icon} className="size-7 mt-1.5 mb-1.5" tintColor="#fff" />
        </View>
        <View className="w-40 items-center h-5 mt-1">
        <Text className="text-gray-300">{title}</Text>

        </View>
      </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
 
        tabBarShowLabel: false,
        tabBarStyle: {
          
          width: "100%",
          height: 90,
          overflow: "hidden",
          backgroundColor:"#1A212C"
        },
        tabBarItemStyle:{
          marginTop:15,
        },
       
    
      }}
    >
      <Tabs.Screen
        name="chat" // match the file: chat.tsx
        options={{
          headerShown: false,
          title: "Chats",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.chat} title="Chats" />
          ),
        }}
      />
      <Tabs.Screen
        name="updates" // match the file: updates.tsx
        options={{
                    headerShown: false,

          title: "Updates",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.upgrade} title="Updates" />
          ),
        }}
      />
      <Tabs.Screen
        name="group" // match the file: group.tsx
        options={{
                    headerShown: false,

          title: "Groups",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.group} title="Group" />
          ),
        }}
      />
      <Tabs.Screen
        name="call" // match the file: call.tsx
        options={{
                    headerShown: false,

          title: "Call",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={images.call} title="Calls" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
