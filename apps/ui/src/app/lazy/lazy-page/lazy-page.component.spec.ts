import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyPageComponent } from './lazy-page.component';
import {
  L10nTranslationModule,
  L10N_LOCALE,
  L10nTranslationService,
} from 'angular-l10n';

describe('LazyPageComponent', () => {
  let component: LazyPageComponent;
  let fixture: ComponentFixture<LazyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LazyPageComponent],
      imports: [
        L10nTranslationModule.forRoot({
          format: 'language-region',
          providers: [{ name: 'app', asset: {} }],
          keySeparator: '.',
          defaultLocale: { language: 'en-US', currency: 'USD' },
          schema: [
            {
              locale: { language: 'en-US', currency: 'USD' },
              dir: 'ltr',
              text: 'United States',
            },
          ],
        }),
      ],
      providers: [
        L10nTranslationService,
        {
          provide: L10N_LOCALE,
          useValue: { language: 'en-US', currency: 'USD' },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
