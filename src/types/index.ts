export type ThemeMode = 'dark' | 'light';

export interface RockEra {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  quote: string;
  badge: string;
  image: string;
  imageCaption: string;
}

export interface RealRockPhoto {
  id: string;
  title: string;
  year: string;
  location: string;
  src: string;
  description: string;
}

export interface CheatMealItem {
  id: string;
  name: string;
  category: 'sweet' | 'savory' | 'dessert';
  quantity: string;
  calories: number;
  proteinGrams: number;
  funFact: string;
}

export interface CheatMealPreset {
  id: string;
  title: string;
  description: string;
  totalCalories: number;
  items: string[];
  rockVerdict: string;
}

export interface WorkoutExercise {
  name: string;
  sets: string;
  reps: string;
  tip: string;
}

export interface WorkoutPlan {
  id: string;
  title: string;
  targetGroup: string;
  duration: string;
  intensity: string;
  quote: string;
  exercises: WorkoutExercise[];
}

export interface RockQuote {
  id: string;
  en: string;
  pt: string;
  context: string;
  audioKey?: 'smell' | 'finally' | 'name' | 'mana' | 'focus';
}
