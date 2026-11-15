/* eslint-disable prettier/prettier */
import { LitElement, html, customElement, property, TemplateResult } from 'lit-element';
import FlipClock from 'FlipClock';
import { HomeAssistant } from 'custom-card-helpers';

import { FlipClockCardConfig, Timezone } from './types';
import { style, customStyles } from './style';
import { mergeDeep } from './helpers';

import * as pjson from '../package.json';

console.info(
  `%c  FLIPCLOCK-CARD \n%c  Version ${pjson.version}  `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

@customElement('flipclock-card')
export class FlipClockCard extends LitElement {
  @property() private _hass?: HomeAssistant;
  @property() private _config!: FlipClockCardConfig;
  private _date!: Date;
  private _timezones!: Timezone[];
  private _clockFaces: string[] = ['TwentyFourHourClock', 'TwelveHourClock'];
  private _firstUpdated = false;
  private _notificationHistory: { title: string; message: string; time: number }[] = [];
  private _lastNotificationChanged: string | null = null;
  private _unreadCount = 0;
  private _notifListOpen = false;
  private _bannerHideTimeout: ReturnType<typeof setTimeout> | null = null;
  private _effectiveFace!: string;

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    this._date = new Date();

    setInterval(this.updateTimezones.bind(this), 500);
    setInterval(this.updateMeridiemBottom.bind(this), 500);
    setInterval(this.updateNotificationBanner.bind(this), 500);
  }

  public setConfig(config: FlipClockCardConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }

    this._config = mergeDeep(
      {
        title: null,
        time: {
          face: 'TwentyFourHourClock',
          showSeconds: false,
          meridiemFontSize: null,
          meridiemFontFamily: null,
          meridiemOffset: null,
          meridiemColor: null,
          meridiemPosition: 'inline',
          cardSize: null,
        },
        timezones: [],
        date: {
          format: {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          },
          hidden: false,
          locale: null,
          fontSize: null,
          fontFamily: null,
          color: null,
        },
        background: {
          type: null,
        },
      },
      config,
    );

    this._timezones = [];
    this._config.timezones.forEach((item) => {
      this._timezones.push({
        id: typeof item == 'string' ? item : (item as Timezone).id,
        title: typeof item == 'string' ? item : (item as Timezone).title,
      });
    });

    if (!this._effectiveFace) {
      const saved = this.getSavedFace();
      this._effectiveFace = saved && this._clockFaces.includes(saved) ? saved : this._config.time.face;
    }
  }

  private getSavedFace(): string | null {
    try {
      return localStorage.getItem('flipclock-card-time-format');
    } catch (e) {
      return null;
    }
  }

  private saveFace(face: string): void {
    try {
      localStorage.setItem('flipclock-card-time-format', face);
    } catch (e) {
      // ignore
    }
  }

  private toggleTimeFormat(): void {
    this._effectiveFace = this._effectiveFace === 'TwelveHourClock' ? 'TwentyFourHourClock' : 'TwelveHourClock';
    this.saveFace(this._effectiveFace);
    this.rebuildClock();
  }

  private rebuildClock(): void {
    const container = this.shadowRoot?.querySelector('.fc-time');
    if (!container) return;
    container.innerHTML = '';
    const el = this.createClockElement();
    if (el) container.appendChild(el);
  }

  private createClockElement(): HTMLElement | null {
    if (!this._clockFaces.includes(this._effectiveFace)) return null;
    const el = document.createElement('div');
    el.className = 'fc-now';
    new FlipClock(el, this._date, {
      face: this._effectiveFace,
      showSeconds: this._config.time.showSeconds,
    });

    this.applyTwelveHourSizeCompensation();

    return el;
  }

  // The AM/PM label (12-hour face only) renders as an absolutely-positioned
  // child of the minutes group, but still nudges that group's flex-measured
  // width slightly wider in some browser engines. Shrink the clock a touch in
  // 12-hour mode so the total row still fits without wrapping. FlipClock
  // periodically regenerates its own internal DOM on each digit change, which
  // would wipe a one-off inline style, so this sets a CSS custom property on
  // the stable container we own instead, read by a static rule in style.ts
  // that keeps applying across any number of FlipClock-internal re-renders.
  private applyTwelveHourSizeCompensation(): void {
    const container = this.shadowRoot?.querySelector('.fc-time') as HTMLElement | null;
    if (!container) return;
    const isTwelveHour = this._effectiveFace === 'TwelveHourClock';
    container.classList.toggle('twelve-hour-mode', isTwelveHour);
    if (isTwelveHour && this._config.time.cardSize) {
      const match = String(this._config.time.cardSize).match(/^([\d.]+)(\D*)$/);
      if (match) {
        const value = parseFloat(match[1]) * 0.3;
        const unit = match[2] || 'px';
        container.style.setProperty('--fc-12h-font-size', `${value}${unit}`);
      }
    }
  }

  protected shouldUpdate(): boolean {
    return !this._firstUpdated;
  }

  protected firstUpdated(): void {
    this._firstUpdated = true;
    this.shadowRoot?.getElementById('fc_notif_fab')?.addEventListener('click', () => this.toggleNotificationList());
    this.shadowRoot?.getElementById('fc_format_toggle')?.addEventListener('click', () => this.toggleTimeFormat());
  }

  protected render(): TemplateResult | void {
    if (!this._config || !this._hass) {
      return html``;
    }
    return html`
      <ha-card>
        <div class="fc-notification" id="fc_notification">
          <span class="fc-notification-title" id="fc_notification_title"></span>
          <span class="fc-notification-message" id="fc_notification_message"></span>
        </div>
        <div class="fc-notif-fab" id="fc_notif_fab">
          <ha-icon icon="mdi:bell-outline"></ha-icon>
          <span class="fc-notif-badge" id="fc_notif_badge"></span>
        </div>
        <div class="fc-notif-list" id="fc_notif_list"></div>
        <div class="fc-format-toggle" id="fc_format_toggle">
          <ha-icon icon="mdi:clock-time-four-outline"></ha-icon>
        </div>
        <div class="fc-content">
          ${this.showValue(this._config.title)
            ? html`
                <div class="fc-header">
                  ${this._config.title}
                </div>
              `
            : ''}
          <div class="fc-time">
            ${this.renderClock()}
          </div>
          ${this.renderDate()} ${this.renderTimezones()}
        </div>
      </ha-card>
      ${style} ${customStyles(this._config)}
    `;
  }

  protected getCardSize(): number {
    return 3;
  }

  private showValue(item): boolean {
    return typeof item !== 'undefined' && item !== null;
  }

  private renderClock(): TemplateResult {
    const el = this.createClockElement();
    return el ? html`${el}` : html``;
  }

  private renderDate(): TemplateResult {
    if (this._config.date.hidden) return html``;
    const showMeridiemHere = this._config.time.meridiemPosition === 'bottom' && this._effectiveFace === 'TwelveHourClock';
    return html` <div class="fc-date">
      ${showMeridiemHere
        ? html`<span class="fc-meridiem-bottom" id="fc_meridiem_bottom">${this.formatMeridiem(this._date)}</span>`
        : ''}
      <span class="fc-date-text">${this.formatDate(this._date)}</span>
    </div>`;
  }

  private formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
    const l = this._config.date.locale || this._hass?.language;
    const o = options || this._config.date.format;
    return date.toLocaleDateString(l, o);
  }

  private formatMeridiem(date: Date): string {
    const l = this._config.date.locale || this._hass?.language;
    const parts = new Intl.DateTimeFormat(l, { hour: 'numeric', hour12: true }).formatToParts(date);
    const part = parts.find((p) => p.type === 'dayPeriod');
    return part ? part.value : '';
  }

  private updateMeridiemBottom(): void {
    if (this._config?.time?.meridiemPosition !== 'bottom') return;
    const el = this.shadowRoot?.getElementById('fc_meridiem_bottom');
    if (el) el.innerHTML = this.formatMeridiem(new Date());
  }

  private updateNotificationBanner(): void {
    if (!this._hass) return;
    const title = this._hass.states['input_text.dashboard_last_notification_title'];
    const message = this._hass.states['input_text.dashboard_last_notification_message'];
    if (!title || !title.state) return;

    const changedAt = (title as unknown as { last_changed: string }).last_changed;
    const isNew = changedAt && changedAt !== this._lastNotificationChanged;
    if (!isNew) return;
    this._lastNotificationChanged = changedAt;

    this._notificationHistory.unshift({ title: title.state, message: message?.state || '', time: Date.now() });
    this._notificationHistory = this._notificationHistory.slice(0, 20);

    if (!this._notifListOpen) {
      this._unreadCount++;
      this.updateNotifBadge();
    } else {
      this.renderNotifList();
    }

    const bannerEl = this.shadowRoot?.getElementById('fc_notification');
    const titleEl = this.shadowRoot?.getElementById('fc_notification_title');
    const messageEl = this.shadowRoot?.getElementById('fc_notification_message');
    if (titleEl) titleEl.textContent = title.state;
    if (messageEl) messageEl.textContent = message?.state || '';
    bannerEl?.classList.add('visible');

    if (this._bannerHideTimeout) clearTimeout(this._bannerHideTimeout);
    this._bannerHideTimeout = setTimeout(() => {
      bannerEl?.classList.remove('visible');
    }, 6000);
  }

  private updateNotifBadge(): void {
    const badgeEl = this.shadowRoot?.getElementById('fc_notif_badge');
    if (!badgeEl) return;
    if (this._unreadCount > 0) {
      badgeEl.textContent = this._unreadCount > 9 ? '9+' : String(this._unreadCount);
      badgeEl.classList.add('visible');
    } else {
      badgeEl.classList.remove('visible');
    }
  }

  private toggleNotificationList(): void {
    this._notifListOpen = !this._notifListOpen;
    const listEl = this.shadowRoot?.getElementById('fc_notif_list');
    listEl?.classList.toggle('open', this._notifListOpen);
    if (this._notifListOpen) {
      this._unreadCount = 0;
      this.updateNotifBadge();
      this.renderNotifList();
    }
  }

  private renderNotifList(): void {
    const listEl = this.shadowRoot?.getElementById('fc_notif_list');
    if (!listEl) return;
    if (this._notificationHistory.length === 0) {
      listEl.innerHTML = '<div class="fc-notif-empty">No notifications yet</div>';
      return;
    }
    listEl.innerHTML = this._notificationHistory
      .map((n) => {
        const time = new Date(n.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        const title = this.escapeHtml(n.title);
        const message = this.escapeHtml(n.message);
        return `<div class="fc-notif-item">
          <div class="fc-notif-item-row"><span class="fc-notif-item-title">${title}</span><span class="fc-notif-item-time">${time}</span></div>
          ${message ? `<div class="fc-notif-item-message">${message}</div>` : ''}
        </div>`;
      })
      .join('');
  }

  private escapeHtml(str: string): string {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  private formatTimezone(tzId: string): string {
    return this.formatDate(this._date, {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: tzId,
      weekday: 'short',
    });
  }

  private renderTimezones(): TemplateResult {
    return html`
      <div class="fc-timezone" id="fc_timezone">
        ${this._timezones.map(
          (item, index) => html`
            <div class="item">
              <div class="tz">
                <ha-icon class="tz-icon" icon="mdi:clock-outline"></ha-icon>
                <div class="tz-locale">${item.title}</div>
              </div>
              <div class="tz-time" id="tz_${index}">
                ${this.formatTimezone(item.id)}
              </div>
            </div>
          `,
        )}
      </div>
    `;
  }

  private updateTimezones(): void {
    this._timezones.map((item, index) => {
      const el = this.shadowRoot?.getElementById(`tz_${index}`);
      if (el) el.innerHTML = this.formatTimezone(item.id);
    });
  }
}
