import { images } from "@/constant/image";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface UserFieldProps {
  imageUrl: string;
  name: string;
  latestMessage: string;
  date: string;
  isOnline: boolean;
  isReadTheMessage: boolean;
  onTap:()=> void;
}

const UserField = ({
  name,
  imageUrl,
  isOnline,
  latestMessage,
  date,
  isReadTheMessage,
  onTap
}: UserFieldProps) => {
  return (

<TouchableOpacity onPress={onTap}>
  
    <View className="pl-5 pr-5 pt-3 pb-3 flex-row items-center bg-[#131923] border-b border-[#374149]">
      {/* Image View */}
      <View>
        <View className="h-20 w-20 rounded-full relative">
          <Image
            source={{ uri: imageUrl }}
            className="h-full w-full rounded-full"
          />
        </View>
        {isOnline ? (
          <View className="bg-green-600 h-6 w-6 rounded-full absolute bottom-0 border-2 left-1 "></View>
        ) : (
          <></>
        )}
      </View>

      {/* Right Text Container */}
      <View className="ml-3 w-[85%]">
        <View className="flex-row justify-between">
          <Text className="text-white text-2xl font-medium">{name}</Text>
          <Text className="text-[#888C91] text-l font-normal">{date}</Text>
        </View>

        <View className="flex-row items-center">
          <Image
            source={images.tick}
            tintColor={isReadTheMessage ? "#53BDEB" : "#8794A1"}
            className="mr-1"
          />
          <Text className="text-[#888C91] text-xl font-normal">
            {latestMessage}
          </Text>
        </View>
      </View>
    </View>
</TouchableOpacity>

  );
};

export default UserField;
