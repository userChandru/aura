import { TouchableOpacity, View, Text } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center px-4 my-4 ${containerStyles} ${isLoading ? 'opacity-50' : ''} : ''`}
    disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg px-1 ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
