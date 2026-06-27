import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ChevronDown } from 'lucide-react-native';
import { Colors, Radius, Spacing } from '../../constants/theme';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function PhoneInput({ value, onChangeText }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Phone Number</Text>

      <View style={[styles.inputRow, isFocused && styles.inputRowFocused]}>
        {/* Country code selector */}
        <TouchableOpacity style={styles.countryCode} activeOpacity={0.7}>
          <Text style={styles.flag}>🇰🇪</Text>
          <Text style={styles.dialCode}>+254</Text>
          <ChevronDown size={14} color={Colors.textMuted} strokeWidth={2} />
        </TouchableOpacity>

        <View style={styles.divider} />

        {/* Phone number input */}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder="712 345 678"
          placeholderTextColor={Colors.primaryLight}
          keyboardType="phone-pad"
          maxLength={9}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      <Text style={styles.hint}>
        We'll send a 4-digit code to verify your account.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: Spacing.sm,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E8E8E8',
    borderRadius: Radius.lg,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  inputRowFocused: {
    borderColor: Colors.primary,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  flag: {
    fontSize: 18,
  },
  dialCode: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.textDark,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#E8E8E8',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: Colors.textDark,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
  },
  hint: {
    fontSize: 12,
    color: Colors.textMuted,
    lineHeight: 18,
  },
});
