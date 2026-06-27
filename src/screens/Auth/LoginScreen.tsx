import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Eye, EyeOff, Lock } from 'lucide-react-native';
import AuthBrandHeader from '../../components/auth/AuthBrandHeader';
import PhoneInput from '../../components/auth/PhoneInput';
import SocialAuthButtons from '../../components/auth/SocialAuthButtons';
import AuthFooter from '../../components/auth/AuthFooter';
import PrimaryButton from '../../components/PrimaryButton';
import { Colors, Radius, Spacing } from '../../constants/theme';

import { RootStackScreenProps } from '../../navigation/types';

type Props = RootStackScreenProps<'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.headerBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <ChevronLeft size={22} color={Colors.textDark} strokeWidth={2.5} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Log In</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <AuthBrandHeader subtitle="Good to have you back. Let's get the party started." />

        <View style={styles.form}>
          <PhoneInput value={phone} onChangeText={setPhone} />

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Password</Text>
            <View
              style={[
                styles.passwordRow,
                isFocused && styles.passwordRowFocused,
              ]}
            >
              <Lock size={18} color={Colors.textMuted} strokeWidth={2} />
              <TextInput
                style={styles.passwordInput}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor={Colors.primaryLight}
                secureTextEntry={!showPassword}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(v => !v)}
                style={styles.eyeButton}
                activeOpacity={0.7}
              >
                {showPassword ? (
                  <EyeOff size={18} color={Colors.textMuted} strokeWidth={2} />
                ) : (
                  <Eye size={18} color={Colors.textMuted} strokeWidth={2} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              /* handle forgot password */
            }}
            style={styles.forgotRow}
            activeOpacity={0.7}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <PrimaryButton
            label="Log In"
            onPress={() => navigation.navigate('App')}
            showArrow={false}
          />
        </View>

        <SocialAuthButtons onPress={() => {}} />

        <View style={styles.footer}>
          <AuthFooter
            onTermsPress={() => {
              /* open terms */
            }}
            onPrivacyPress={() => {
              /* open privacy */
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textDark,
  },
  scroll: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
    gap: Spacing.xl,
  },
  form: {
    gap: Spacing.lg,
  },
  fieldGroup: {
    gap: Spacing.sm,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E8E8E8',
    borderRadius: Radius.lg,
    backgroundColor: Colors.white,
    paddingHorizontal: Spacing.md,
    gap: Spacing.sm,
  },
  passwordRowFocused: {
    borderColor: Colors.primary,
  },
  lockIcon: {
    marginRight: 2,
  },
  passwordInput: {
    flex: 1,
    fontSize: 15,
    color: Colors.textDark,
    paddingVertical: Spacing.md,
  },
  eyeButton: {
    padding: 4,
  },
  forgotRow: {
    alignSelf: 'flex-end',
    marginTop: -Spacing.sm,
  },
  forgotText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.primary,
  },
  footer: {
    marginTop: 'auto',
  },
});
