import { Component, OnInit, Inject } from '@angular/core';
import { L10N_LOCALE, L10nLocale } from 'angular-l10n';

@Component({
  selector: 'test-angular-l10n-lazy-page',
  templateUrl: './lazy-page.component.html',
  styleUrls: ['./lazy-page.component.scss'],
})
export class LazyPageComponent implements OnInit {
  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale) {}

  ngOnInit(): void {}
}
