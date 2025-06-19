import { View, Text,Image,TextInput } from 'react-native'
import React from 'react'
import { images } from '@/constant/image'

const ChatsHeader = () => {
  return (
 <View className='bg-[#202A35] w-full pl-5  pr-5 pb-5'>

<View className='flex flex-row mt-16 justify-between items-center mr-5' >

<Text className='text-[#8A949F] text-4xl font-bold'>Chats</Text>
<View className='flex flex-row justify-center items-center '> 
 
<Image source={images.Camera} className='size-8' tintColor={"#8A949F"}/>
<Image source={images.moreHr} className= ' ml-9' tintColor={"#8A949F"}/>
</View>

</View>
{/* search bar */}
<View className='mt-5 flex flex-row  items-center'>

  <View className="flex-row items-center bg-[#2A323D] rounded-full h-[50px] pl-5 w-[90%]">
      <TextInput
        className="flex-1 text-xl text-white"
        placeholder="Search..."
        placeholderTextColor="#909C9D"
      />
            <Image source={images.search} className="size-10 mr-3" tintColor="#909C9D" />

    </View>

    <View className='ml-3'> 
            <Image source={images.moreVr} className="size-10 mr-3" tintColor="#909C9D" />


      
    </View>

</View>

      </View>
  )
}

export default ChatsHeader