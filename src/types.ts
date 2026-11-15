export interface FlipClockCardConfig {
  title: string;
  time: TimeOptions;
  timezones: string[] | Timezone[];
  date: DateOptions;
  background?: BackgroundOptions;
}

export interface TimeOptions {
  face: string;
  showSeconds: boolean;
  meridiemFontSize?: string;
  meridiemFontFamily?: string;
  meridiemOffset?: string;
  meridiemColor?: string;
  // 'inline' (default): AM/PM rendered by FlipClock next to the last digit.
  // 'bottom': AM/PM hidden there and rendered next to the date instead.
  meridiemPosition?: 'inline' | 'bottom';
  cardSize?: string;
}

export interface DateOptions {
  format: Intl.DateTimeFormatOptions;
  hidden: boolean;
  locale: string;
  fontSize?: string;
  fontFamily?: string;
  color?: string;
}

export interface Timezone {
  id: string;
  title: string;
}

export interface BackgroundOptions {
  // 'solid': a single flat color (use `color`).
  // 'gradient': a custom linear gradient (use `colors` + `direction`).
  // 'preset': one of the built-in named gradients (use `preset`).
  type?: 'solid' | 'gradient' | 'preset';
  color?: string;
  colors?: string[];
  direction?: string;
  preset?: 'aurora' | 'sunset' | 'ocean' | 'midnight';
  animate?: boolean;
  animationDuration?: string;
}
