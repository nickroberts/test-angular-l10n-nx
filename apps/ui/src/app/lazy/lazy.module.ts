import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPageComponent } from './lazy-page/lazy-page.component';
import { RouterModule, Routes } from '@angular/router';
import { L10nTranslationModule } from 'angular-l10n';

const routes: Routes = [
  {
    path: '',
    component: LazyPageComponent,
  },
];

@NgModule({
  declarations: [LazyPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), L10nTranslationModule],
})
export class LazyModule {}
