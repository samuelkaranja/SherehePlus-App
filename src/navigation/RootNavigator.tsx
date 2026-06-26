import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import OnboardingNavigator from '../screens/onboarding/OnboardingNavigator';
import AppTabs from './AppTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] =
    useState<boolean>(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'fade' }}
      >
        {!hasCompletedOnboarding ? (
          <Stack.Screen name="Onboarding">
            {() => (
              <OnboardingNavigator
                onComplete={() => setHasCompletedOnboarding(true)}
              />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="App" component={AppTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
