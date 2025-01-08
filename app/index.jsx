import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <StatusBar style="auto" />
      <Text className='text-3xl bg-red-100 font-'>Aora!</Text>
      <Link href='/profile' style={{color:'green'}}>Go to profile</Link>
    </View>
  );
}