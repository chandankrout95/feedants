import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Icon({ name, size = 22, color = '#0B6B6B' }) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
}
