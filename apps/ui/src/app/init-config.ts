import { Injectable } from '@angular/core';

import { forkJoin } from 'rxjs';
import { L10nLoader } from 'angular-l10n';

@Injectable()
export class InitConfig {
  constructor(private l10nLoader: L10nLoader) {}

  load(): Promise<any> {
    return forkJoin([this.l10nLoader.init()]).toPromise();
  }
}
