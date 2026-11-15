export interface FlipClockCardConfig {
  title: string;
  time: TimeOptions;
  timezones: string[] | Timezone[];
  date: DateOptions;
}

export interface TimeOptions {
  face: string;
  showSeconds: boolean;
  meridiemFontSize?: string;
  meridiemFontFamily?: string;
  meridiemOffset?: string;
  cardSize?: string;
}

export interface DateOptions {
  format: Intl.DateTimeFormatOptions;
  hidden: boolean;
  locale: string;
  fontSize?: string;
  fontFamily?: string;
}

export interface Timezone {
  id: string;
  title: string;
}
