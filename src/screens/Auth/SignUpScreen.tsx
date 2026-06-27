import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';
import AuthBrandHeader from '../../components/auth/AuthBrandHeader';
import PhoneInput from '../../components/auth/PhoneInput';
import SocialAuthButtons from '../../components/auth/SocialAuthButtons';
import AuthFooter from '../../components/auth/AuthFooter';
import PrimaryButton from '../../components/PrimaryButton';
import PageDots from '../../components/PageDots';
import { Colors, Spacing } from '../../constants/theme';

import { RootStackScreenProps } from '../../navigation/types';

type Props = RootStackScreenProps<'SignUp'>;

export default function SignUpScreen({ navigation }: Props) {
  const [phone, setPhone] = useState('');

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
        <Text style={styles.headerTitle}>Sign Up</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <AuthBrandHeader />

        <View style={styles.form}>
          <PhoneInput value={phone} onChangeText={setPhone} />
          <PrimaryButton
            label="Continue"
            onPress={() => navigation.navigate('App')}
            showArrow={false}
            style={styles.cta}
          />
          <View style={styles.dotsRow}>
            <PageDots total={3} current={0} />
          </View>
        </View>

        <SocialAuthButtons
          onPress={option => {
            if (option === 'email') navigation.navigate('Login');
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.loginLink}
          activeOpacity={0.7}
        >
          <Text style={styles.loginLinkText}>
            Already have an account?{' '}
            <Text style={styles.loginLinkAccent}>Log in</Text>
          </Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <AuthFooter onTermsPress={() => {}} onPrivacyPress={() => {}} />
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
  cta: {
    marginTop: Spacing.xs,
  },
  dotsRow: {
    alignItems: 'center',
  },
  footer: {
    marginTop: 'auto',
  },
  loginLink: {
    alignItems: 'center',
  },
  loginLinkText: {
    fontSize: 14,
    color: Colors.textMuted,
  },
  loginLinkAccent: {
    color: Colors.primary,
    fontWeight: '700',
  },
});
