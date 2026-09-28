import React from 'react';
import { View } from 'react-native';
export default function Card({ className = '', children, ...rest }) {
  return (
    <View
      className={`bg-white rounded-2xl mx-3 mb-3 border border-line/60 ${className}`}
      style={{ elevation: 2, shadowColor: '#0B6B6B', shadowOpacity: 0.08, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } }}
      {...rest}>
      {children}
    </View>
  );
}
