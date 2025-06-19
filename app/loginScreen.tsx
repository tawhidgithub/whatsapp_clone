import CustomButton from '@/component/customButton';
import TextField from '@/component/textField';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const LoginScreen = () => {


     
    const route= useRouter();
  return (
 <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-primary"
      keyboardShouldPersistTaps="handled"
      enableOnAndroid={true}
      extraScrollHeight={20}
    >
      <View className="flex-1 items-center px-5 mt-32">
        <View className="flex items-start w-full mb-32 mt-10">
          <Text className="text-white text-6xl font-bold leading-relaxed ">
            Login
          </Text>
          <Text className="text-white text-lg font-normal mt-2 tracking-[1px]">
            Login with your Email
          </Text>
          <Text className="text-white text-lg font-normal tracking-[0.5px]">
            {"if you don't have an account then  "}
            <Text
              className="underline text-accent"
              onPress={() => route.push("/signUpScreen")}
            >
              Register
            </Text>
          </Text>
        </View>
        <View className="w-full gap-6">
          <TextField
            placeHolder={"Email"}
            value={"email"}
            onChangeText={(value) => {}}
          />
          <TextField
            placeHolder={"Password"}
            passwordField
            value={"pass"}
            onChangeText={(value) =>{}}
          />
        </View>

        <View className=" w-full mt-32">
          <CustomButton
            loading={false}
            btnTitle={"Login"}
            onClick={() => {
              
              // dispatch(logout())
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default LoginScreen