import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../constants/theme';

type Props = {
  onPress: () => void;
  style?: ViewStyle;
};

export default function SkipButton({ onPress, style }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.7}
    >
      <Text style={styles.label}>Skip</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.primary,
  },
});
