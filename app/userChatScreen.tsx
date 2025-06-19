import { images } from "@/constant/image";
import { Image, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function UserChatScreen (){


return(<SafeAreaProvider>
<View className="  bg-[#223B43] h-40 justify-end pb-5" >
<View  className="flex-row justify-between pl-5 pr-5 ">

    <View className="flex-row items-center color-white">
    <Image source={images.backArrow} className="size-8 " tintColor="white"/>

          {/* Image View */}
            {/* <View className="h-10 w-10 rounded-full relative">
              <Image
                source={{ uri:'https://randomuser.me/api/portraits/men/1.jpg'}}
                className="h-full w-full rounded-full"
              />
            </View>
            <Text className="text-white">Tawhid Islam</Text> */}
         
       
</View>
<View className="flex-row " >
<Image source={images.call_back} className="size-6 mr-5" tintColor="white"/>
<Image source={images.moreHr} className="h-6 w-auto" tintColor="white"/>


</View>
</View>

</View>


</SafeAreaProvider>)

}