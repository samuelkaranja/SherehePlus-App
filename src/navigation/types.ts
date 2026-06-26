import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Onboarding: undefined;
  App: undefined;
};

export type AppTabParamList = {
  Home: undefined;
  Explore: undefined;
  Tickets: undefined;
  Profile: undefined;
};

// Convenience screen prop types
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AppTabScreenProps<T extends keyof AppTabParamList> =
  BottomTabScreenProps<AppTabParamList, T>;
