import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Ticket } from 'lucide-react-native';
import OnboardingSlide from '../../components/OnboardingSlide';
import { Colors, Radius, Spacing } from '../../constants/theme';

type Props = {
  onGetStarted: () => void;
  onSkip: () => void;
};

export default function GroupFunScreen({ onGetStarted, onSkip }: Props) {
  return (
    <OnboardingSlide
      heading="Celebrate with"
      headingAccent="Friends"
      body="Create groups, invite your friends, and enjoy exclusive group discounts on every event."
      currentPage={2}
      buttonLabel="Get Started"
      onNext={onGetStarted}
      onSkip={onSkip}
      showArrow
    >
      <GroupCard />
    </OnboardingSlide>
  );
}

function GroupCard() {
  return (
    // Replace with: source={require('../../assets/onboarding_group.jpg')}
    <ImageBackground
      source={{ uri: 'https://via.placeholder.com/600x420/4a7c59/4a7c59' }}
      style={styles.image}
      imageStyle={styles.imageInner}
      resizeMode="cover"
    >
      <View style={styles.discountBanner}>
        <Ticket size={14} color={Colors.white} strokeWidth={2} />
        <Text style={styles.discountText}>GROUP DISCOUNT</Text>
      </View>

      <View style={styles.avatarRow}>
        <View style={[styles.avatar, { backgroundColor: '#8AABBA' }]} />
        <View
          style={[
            styles.avatar,
            { backgroundColor: Colors.primaryLight, marginLeft: -10 },
          ]}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: Radius.lg,
    overflow: 'hidden',
    justifyContent: 'space-between',
    padding: Spacing.md,
  },
  imageInner: {
    borderRadius: Radius.lg,
  },
  discountBanner: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: Radius.pill,
    transform: [{ rotate: '4deg' }],
  },
  discountText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 1,
  },
  avatarRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 'auto',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: Colors.white,
  },
});
