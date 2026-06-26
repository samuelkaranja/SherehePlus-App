import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { ArrowRight } from 'lucide-react-native';
import { Colors, Radius, Typography } from '../constants/theme';

type Props = {
  label: string;
  onPress: () => void;
  showArrow?: boolean;
  style?: ViewStyle;
};

export default function PrimaryButton({
  label,
  onPress,
  showArrow = true,
  style,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text style={styles.label}>{label}</Text>
      {showArrow && (
        <View style={styles.iconWrap}>
          <ArrowRight size={18} color={Colors.white} strokeWidth={2.5} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.lg,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  label: {
    ...Typography.splashTitle,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0,
  },
  iconWrap: {
    marginLeft: 4,
  },
});
