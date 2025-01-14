import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView>
          <View className="w-full min-h-[85vh] justify-center px-4 my-6">
            <Image
              source={images.logo}
              className="w-[115px] h-[35px]"
              resizeMode="contain"
            />
            <Text className="text-2xl text-white text-semibold font-psemibold mt-10">
              Sign up to Aora
            </Text>
            <FormField
              title="Username"
              value={form.username}
              handleTextChange={(e) => setForm({ ...form, username: e })}
              otherStyles="mt-7"
              placeHolder="Username"
            />
            <FormField
              title="Email"
              value={form.email}
              handleTextChange={(e) => setForm({ ...form, email: e })}
              otherStyles="mt-5"
              keyBoardType="email-address"
              placeHolder="Email"
            />
            <FormField
              title="Password"
              value={form.password}
              handleTextChange={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-5"
              placeHolder="Password"
            />
            <CustomButton
              title="Sign up"
              handlePress={submit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap2">
              <Text className="text-lg text-gray-100 font-pregular">
                Already have an account?{" "}
              </Text>
              <Link
                href="/sign-in"
                className="text-lg font-psemibold text-secondary underline"
              >
                Sign in
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;