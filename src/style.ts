import { html, TemplateResult } from 'lit-element';
import { FlipClockCardConfig } from './types';

export const style = html`
  <style>
    :host {
      display: block;
      height: 100%;
    }

    ha-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    .fc-notification {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      display: flex;
      align-items: baseline;
      gap: 0.5em;
      padding: 0.6em 1em;
      background: rgba(20, 22, 26, 0.92);
      color: #f0f0f0;
      transform: translateY(-100%);
      transition: transform 0.35s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    }

    .fc-notification.visible {
      transform: translateY(0);
    }

    .fc-notification-title {
      font-weight: 700;
      font-size: 1.1em;
      white-space: nowrap;
    }

    .fc-notification-message {
      font-weight: 300;
      font-size: 1em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .fc-notif-fab {
      position: absolute;
      right: 0.7em;
      bottom: 0.7em;
      z-index: 11;
      width: 2.4em;
      height: 2.4em;
      border-radius: 50%;
      background: rgba(20, 22, 26, 0.85);
      color: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
      cursor: pointer;
    }

    .fc-format-toggle {
      position: absolute;
      left: 0.7em;
      bottom: 0.7em;
      z-index: 11;
      width: 2.4em;
      height: 2.4em;
      border-radius: 50%;
      background: rgba(20, 22, 26, 0.85);
      color: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
      cursor: pointer;
    }

    .fc-format-toggle ha-icon {
      --mdc-icon-size: 1.3em;
    }

    .fc-notif-fab ha-icon {
      --mdc-icon-size: 1.3em;
    }

    .fc-notif-badge {
      position: absolute;
      top: -0.2em;
      right: -0.2em;
      min-width: 1.3em;
      height: 1.3em;
      padding: 0 0.2em;
      border-radius: 1em;
      background: #e04b4b;
      color: #fff;
      font-size: 0.65em;
      font-weight: 700;
      display: none;
      align-items: center;
      justify-content: center;
    }

    .fc-notif-badge.visible {
      display: flex;
    }

    .fc-notif-list {
      position: absolute;
      right: 0.7em;
      bottom: 3.4em;
      z-index: 11;
      width: min(16em, 70%);
      max-height: 50%;
      overflow-y: auto;
      background: rgba(20, 22, 26, 0.95);
      color: #f0f0f0;
      border-radius: 0.6em;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
      padding: 0;
      opacity: 0;
      pointer-events: none;
      transform: translateY(0.5em);
      transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .fc-notif-list.open {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }

    .fc-notif-item {
      padding: 0.6em 0.8em;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      font-size: 0.8em;
    }

    .fc-notif-item:last-child {
      border-bottom: none;
    }

    .fc-notif-item-row {
      display: flex;
      justify-content: space-between;
      gap: 0.5em;
    }

    .fc-notif-item-title {
      font-weight: 700;
    }

    .fc-notif-item-time {
      opacity: 0.6;
      white-space: nowrap;
    }

    .fc-notif-item-message {
      margin-top: 0.2em;
      opacity: 0.85;
      font-weight: 300;
    }

    .fc-notif-empty {
      padding: 0.8em;
      font-size: 0.8em;
      opacity: 0.7;
      text-align: center;
    }

    .fc-content {
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-areas:
        'fc-header fc-header fc-header'
        'fc-time fc-time fc-time'
        'fc-date fc-date fc-date'
        'fc-timezone fc-timezone fc-timezone';
      grid-template-columns: auto auto auto;
      grid-template-rows: auto 1fr auto auto;
    }

    .fc-header,
    .fc-date {
      grid-area: fc-header;
      color: var(--ha-card-header-color, --primary-text-color);
      font-family: var(--ha-card-header-font-family, inherit);
      font-size: var(--ha-card-header-font-size, 24px);
      font-weight: var(--paper-font-headline_-_font-weight);
      letter-spacing: var(--paper-font-headline_-_letter-spacing);
      line-height: var(--paper-font-headline_-_line-height);
      text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
      -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
      display: block;
    }

    .fc-header {
      padding: 24px 16px 16px;
    }

    .fc-date {
      text-align: center;
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 0.5em;
    }

    .fc-meridiem-bottom {
      font-size: 1.2em;
      font-weight: 700;
      text-transform: uppercase;
    }

    .fc-time {
      grid-area: fc-time;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .fc-date {
      grid-area: fc-date;
    }

    .fc-timezone {
      grid-area: fc-timezone;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 1em;
      color: var(--secondary-text-color);
    }

    .fc-timezone .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: initial;
    }

    .tz-time {
      margin-left: 40px;
    }

    .tz {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
    }

    .tz .tz-icon {
      flex: 0 0 40px;
    }

    .tz .tz-locale {
      flex: 1 0 60px;
    }

    .flip-clock {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .flip-clock {
      font-family: 'Helvetica Neue', Helvetica, sans-serif;
      font-size: 16px;
      -webkit-user-select: none;
      text-align: center;
      position: relative;
      display: flex;
      font-family: 'Helvetica Neue', Helvetica, sans-serif;
      box-sizing: border-box;
      align-items: flex-end;
      padding: 1em;
    }
    .flip-clock .flip-clock-group {
      display: flex;
      position: relative;
    }
    .flip-clock .flip-clock-group .flip-clock-label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      font-size: 1em;
      height: 2em;
      line-height: 2em;
      font-weight: 400;
      text-transform: capitalize;
      transform: translateY(-100%);
    }
    .flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium {
      font-size: 0.55em;
      line-height: 1;
      top: auto;
      bottom: 0.25em;
      left: auto;
      right: 0.3em;
      flex: 0;
      width: auto;
      text-transform: uppercase;
      font-weight: 700;
      text-align: right;
      transform: none;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
    }
    .flip-clock .flip-clock-group .flip-clock-list {
      width: 4.7em;
      height: 8.4em;
      position: relative;
      border-radius: 0.75rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 6px 14px rgba(0, 0, 0, 0.3);
      font-weight: bold;
      color: #ccc;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(:last-child) {
      margin-right: 0.333em;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .active .flip-clock-list-item-inner {
      z-index: 4;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .flip-clock-list-item-inner .top:after,
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .flip-clock-list-item-inner .bottom:after {
      display: none;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip {
      animation-delay: 500ms;
      animation-duration: 500ms;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .flip-clock-list-item-inner {
      perspective: 15em;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .top,
    .flip-clock .flip-clock-group .flip-clock-list.flip .bottom,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before > div {
      animation-delay: inherit;
      animation-fill-mode: forwards;
      animation-duration: inherit;
      animation-timing-function: ease-in;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .bottom:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before > div:after {
      animation-duration: inherit;
      animation-fill-mode: inherit;
      animation-timing-function: inherit;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before {
      animation-delay: 0s;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .top {
      animation-name: flip-top;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .bottom:after {
      animation-name: show-shadow;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div {
      animation-name: indexing;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .bottom:after {
      animation-delay: calc(500ms * 0.15);
      animation-name: hide-shadow;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .bottom {
      animation-name: flip-bottom;
    }
    .flip-clock .flip-clock-group .flip-clock-list .active {
      z-index: 2;
    }
    .flip-clock .flip-clock-group .flip-clock-list .active .bottom {
      z-index: 2;
      transform-origin: top center;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before {
      z-index: 3;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .top {
      z-index: 2;
      transform-origin: bottom center;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .top:after {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%);
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .bottom:after {
      background: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: rotateX(0.0001deg);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner:first-child {
      z-index: 2;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom {
      width: 100%;
      height: 50%;
      overflow: hidden;
      position: relative;
      font-size: 6.3em;
      background: #333;
      box-shadow: inset 0 0 0.2em rgba(0, 0, 0, 0.5);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top:after,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom:after {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top:before,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom:before {
      content: ' ';
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top {
      border-radius: 0.75rem 0.75rem 0 0;
      line-height: 1.33333;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top:after {
      border-radius: 0.75rem 0.75rem 0 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top:before {
      background: #333;
      opacity: 0.4;
      bottom: 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom {
      border-radius: 0 0 0.75rem 0.75rem;
      line-height: 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom:after {
      border-radius: 0 0 0.75rem 0.75rem;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom:before {
      background: #ccc;
      opacity: 0.1;
    }
    .flip-clock .flip-clock-divider {
      position: relative;
      width: 1.5em;
      height: 8.4em;
    }
    .flip-clock .flip-clock-divider:before,
    .flip-clock .flip-clock-divider:after {
      content: ' ';
      display: block;
      width: 0.75em;
      height: 0.75em;
      background: #333;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    .flip-clock .flip-clock-divider:before {
      transform: translate(-50%, 75%);
    }
    .flip-clock .flip-clock-divider:after {
      transform: translate(-50%, -175%);
    }

    @keyframes indexing {
      0% {
        z-index: 2;
      }
      1% {
        z-index: 3;
      }
      100% {
        z-index: 4;
      }
    }

    @keyframes flip-bottom {
      0% {
        transform: rotateX(90deg);
      }
      100% {
        transform: rotateX(0);
      }
    }

    @keyframes flip-top {
      0% {
        transform: rotateX(0);
      }
      100% {
        transform: rotateX(-90deg);
      }
    }

    @keyframes show-shadow {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes hide-shadow {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @keyframes fc-bg-shift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  </style>
`;

// Per-config overrides for the date text and the AM/PM label, since the
// base stylesheet above hardcodes both. Rendered as a second <style> tag
// after the base one, so these rules win the cascade (same specificity,
// later source order) only for the properties actually set in config.
// Named gradient presets for `background.preset`. Each is a 4-stop
// palette used with a 45deg diagonal gradient, animated via fc-bg-shift
// when `background.animate` is true (the default for presets).
const BACKGROUND_PRESETS: Record<string, string[]> = {
  aurora: ['#0f2027', '#2c5364', '#00c6a7', '#2c5364'],
  sunset: ['#355c7d', '#6c5b7b', '#c06c84', '#f67280'],
  ocean: ['#1e3c72', '#2193b0', '#6dd5ed', '#2193b0'],
  midnight: ['#000000', '#0f0c29', '#302b63', '#24243e'],
};

function buildBackgroundCss(config: FlipClockCardConfig): string {
  const bg = config?.background;
  if (!bg || !bg.type) return '';

  if (bg.type === 'solid' && bg.color) {
    return `ha-card { background: ${bg.color}; }`;
  }

  let colors: string[] | undefined;
  if (bg.type === 'gradient' && bg.colors && bg.colors.length >= 2) {
    colors = bg.colors;
  } else if (bg.type === 'preset' && bg.preset) {
    colors = BACKGROUND_PRESETS[bg.preset];
  }
  if (!colors) return '';

  const direction = bg.direction || '45deg';
  const gradient = `linear-gradient(${direction}, ${colors.join(', ')})`;
  // Preset gradients animate by default (that's the point of a "preset");
  // custom gradients only animate if explicitly requested.
  const shouldAnimate = bg.animate !== undefined ? bg.animate : bg.type === 'preset';

  if (!shouldAnimate) {
    return `ha-card { background: ${gradient}; }`;
  }
  const duration = bg.animationDuration || '18s';
  return `
    ha-card {
      background: ${gradient};
      background-size: 400% 400%;
      animation: fc-bg-shift ${duration} ease infinite;
    }
  `;
}

export function customStyles(config: FlipClockCardConfig): TemplateResult {
  const dateFontSize = config?.date?.fontSize;
  const dateFontFamily = config?.date?.fontFamily;
  const dateColor = config?.date?.color;
  const meridiemFontSize = config?.time?.meridiemFontSize;
  const meridiemFontFamily = config?.time?.meridiemFontFamily;
  const meridiemOffset = config?.time?.meridiemOffset;
  const meridiemColor = config?.time?.meridiemColor;
  const meridiemBottom = config?.time?.meridiemPosition === 'bottom';
  const cardSize = config?.time?.cardSize;

  const css = [
    dateFontSize ? `.fc-date { font-size: ${dateFontSize}; }` : '',
    dateFontFamily ? `.fc-date { font-family: ${dateFontFamily}; }` : '',
    dateColor ? `.fc-date { color: ${dateColor}; }` : '',
    // .flip-clock's font-size is the base unit every card dimension (width,
    // height, digit font-size, divider size) is defined in em relative to,
    // so overriding it alone scales the whole clock proportionally.
    cardSize ? `.flip-clock { font-size: ${cardSize}; }` : '',
    // When the AM/PM label moves next to the date, hide the one FlipClock
    // renders inline next to the last digit instead of styling it.
    meridiemBottom
      ? `.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { display: none; }`
      : '',
    meridiemFontSize
      ? `.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { font-size: ${meridiemFontSize}; }
         .fc-meridiem-bottom { font-size: ${meridiemFontSize}; }`
      : '',
    meridiemFontFamily
      ? `.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { font-family: ${meridiemFontFamily}; }
         .fc-meridiem-bottom { font-family: ${meridiemFontFamily}; }`
      : '',
    // Base stylesheet uses translate(0.5em, -50%) to push the label away
    // from the last digit group. Only the horizontal (first) value is
    // meant to be adjustable here; vertical centering stays at -50%.
    meridiemOffset && !meridiemBottom
      ? `.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { transform: translate(${meridiemOffset}, -50%); }`
      : '',
    meridiemColor
      ? `.flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium { color: ${meridiemColor}; }
         .fc-meridiem-bottom { color: ${meridiemColor}; }`
      : '',
    buildBackgroundCss(config),
  ]
    .filter(Boolean)
    .join('\n');

  return html`<style>${css}</style>`;
}

export default style;
