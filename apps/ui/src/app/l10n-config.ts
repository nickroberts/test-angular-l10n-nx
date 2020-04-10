import {
  L10nConfig,
  L10nStorage,
  L10nLocale,
  L10nTranslationLoader,
  L10nProvider,
} from 'angular-l10n';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export const l10nConfig: L10nConfig = {
  format: 'language-region',
  providers: [{ name: 'app', asset: './assets/i18n' }],
  cache: true,
  fallback: true,
  keySeparator: '.',
  defaultLocale: { language: 'en-US', currency: 'USD' },
  schema: [
    {
      locale: { language: 'en-US', currency: 'USD' },
      dir: 'ltr',
      text: 'United States',
    },
  ],
};

@Injectable()
export class AppStorage implements L10nStorage {
  private hasStorage = typeof Storage !== 'undefined';

  public async read(): Promise<L10nLocale | null> {
    if (this.hasStorage) {
      Promise.resolve(JSON.parse(localStorage.getItem('locale')));
    }
    return Promise.resolve(null);
  }

  public async write(locale: L10nLocale): Promise<void> {
    if (this.hasStorage) {
      localStorage.setItem('locale', JSON.stringify(locale));
    }
    return Promise.resolve();
  }
}

@Injectable()
export class HttpTranslationLoader implements L10nTranslationLoader {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(@Optional() private remoteService: HttpClient) {}

  public get(
    language: string,
    provider: L10nProvider
  ): Observable<{ [key: string]: any }> {
    const url = `${provider.asset}/${language}.json`;
    const options = {
      headers: this.headers,
    };
    return this.remoteService.get(url, options);
  }
}
