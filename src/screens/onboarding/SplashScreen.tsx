import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { PartyPopper } from 'lucide-react-native';
import PrimaryButton from '../../components/PrimaryButton';
import PageDots from '../../components/PageDots';
import { Colors, Radius, Spacing } from '../../constants/theme';

type Props = {
  onGetStarted: () => void;
};

export default function SplashScreen({ onGetStarted }: Props) {
  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Replace with: source={require('../../assets/splash_bg.jpg')} */}
      <ImageBackground
        source={require(`../../assets/images/sherehe.jpeg`)}
        style={styles.bg}
        resizeMode="cover"
      >
        <View style={styles.scrim} />

        <SafeAreaView style={styles.safe}>
  <View style={styles.inner}>

    {/* Top spacer */}
    <View style={{ flex: 1 }} />

    {/* ── Wordmark — centered ── */}
    <View style={styles.brandRow}>
      <View style={styles.iconBox}>
        <PartyPopper size={38} color={Colors.white} strokeWidth={2} />
      </View>
      <View style={styles.wordmarkRow}>
        <Text style={styles.wordmark}>Sherehe</Text>
        <Text style={styles.wordmarkPlus}>+</Text>
      </View>
    </View>

    {/* Bottom spacer — equal to top, keeps brand centered */}
    <View style={{ flex: 1 }} />

    {/* ── Bottom copy — pinned to bottom ── */}
    <View style={styles.bottomBlock}>
      <Text style={styles.eyebrow}>LIPA MDOGO MDOGO</Text>
      <Text style={styles.headline}>
        Experience the{'\n'}
        <Text style={styles.headlineBold}>Best </Text>
        <Text style={styles.headlineAccent}>of Kenya</Text>
      </Text>
      <PrimaryButton
        label="Get Started"
        onPress={onGetStarted}
        style={styles.cta}
      />
      <PageDots total={3} current={0} light />
    </View>

  </View>
</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  bg: {
    flex: 1,
  },
  scrim: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.52)',
  },
  safe: {
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xxl,
    paddingBottom: Spacing.xl,
  },
  brandRow: {
    alignItems: 'center',
    gap: Spacing.sm,
    paddingTop: 40,
  },
  iconBox: {
    width: 75,
    height: 75,
    borderRadius: Radius.md,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  wordmarkRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  wordmark: {
    fontSize: 56,
    fontWeight: '800',
    fontStyle: 'italic',
    color: Colors.white,
    letterSpacing: -0.5,
  },
  wordmarkPlus: {
    fontSize: 56,
    fontWeight: '800',
    fontStyle: 'italic',
    color: Colors.primary,
    marginTop: -2,
  },
  bottomBlock: {
    gap: Spacing.md,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 2.5,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
  },
  headline: {
    fontSize: 34,
    fontWeight: '400',
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 42,
  },
  headlineBold: {
    fontWeight: '800',
    color: Colors.white,
  },
  headlineAccent: {
    fontWeight: '700',
    color: Colors.primary,
  },
  cta: {
    marginTop: Spacing.xs,
  },
});
