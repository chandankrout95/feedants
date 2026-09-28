import React from 'react';
import { View } from 'react-native';
const Bar = ({ h }) => <View className="mx-3 mb-3 rounded-2xl bg-[#E4ECEC]" style={{ height: h }} />;
export default function Skeleton() {
  return <View className="pt-2"><Bar h={170} /><Bar h={120} /><Bar h={60} /><Bar h={220} /><Bar h={160} /></View>;
}
