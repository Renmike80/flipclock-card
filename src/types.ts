export interface FlipClockCardConfig {
  title: string;
  time: TimeOptions;
  timezones: string[] | Timezone[];
  date: DateOptions;
  background?: BackgroundOptions;
  nightDim?: NightDimOptions;
}

export interface NightDimOptions {
  // Hours are local 24-hour clock, 0-23. Default: dim from 23 to 6.
  // Wraps past midnight automatically when start > end.
  enabled?: boolean;
  startHour?: number;
  endHour?: number;
  // 0-1, how dark the dimmed card gets. Default 0.25.
  brightness?: number;
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
  // 'dark-outline': background and flip cards share the same near-black (or
  // custom) shade via `color`, with the cards outlined in white so they stay
  // distinguishable; everything else keeps its existing light text/icons.
  type?: 'solid' | 'gradient' | 'preset' | 'dark-outline';
  color?: string;
  colors?: string[];
  direction?: string;
  preset?: 'aurora' | 'sunset' | 'ocean' | 'midnight';
  animate?: boolean;
  animationDuration?: string;
}
