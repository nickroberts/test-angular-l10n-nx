import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  L10nTranslationModule,
  L10nIntlModule,
  L10nResolver,
} from 'angular-l10n';

import { InitConfig } from './init-config';
import { AppStorage, l10nConfig, HttpTranslationLoader } from './l10n-config';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

export function initApp(initConfig: InitConfig) {
  return () => initConfig.load();
}

export const routes: Routes = [
  { path: 'page', component: PageComponent },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
    resolve: { l10n: L10nResolver },
    data: {
      l10nProviders: [
        {
          name: 'lazy',
          asset: './assets/i18n/lazy',
        },
      ],
    },
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    L10nTranslationModule.forRoot(l10nConfig, {
      storage: AppStorage,
      translationLoader: HttpTranslationLoader,
    }),
    L10nIntlModule,
    // ! This breaks the lazy loading for angular-l10n when refreshing from a lazy-loaded route
    // RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    RouterModule.forRoot(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [
    InitConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [InitConfig],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
