import { TouchableOpacity, View, Text } from "react-native";
import React from "react";

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center`}

    >
      <Text className="text-white font-psemibold text-lg px-1">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
