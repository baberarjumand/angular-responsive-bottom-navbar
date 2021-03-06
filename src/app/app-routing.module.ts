import { Tab1Component } from './pages/tab1/tab1.component';
import { RootTabComponent } from './pages/root-tab/root-tab.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab2Component } from './pages/tab2/tab2.component';
import { Tab3Component } from './pages/tab3/tab3.component';

const routes: Routes = [
  {
    path: '',
    component: RootTabComponent,
    children: [
      { path: 'tab1', component: Tab1Component },
      { path: 'tab2', component: Tab2Component },
      { path: 'tab3', component: Tab3Component },
      { path: '', redirectTo: 'tab1', pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
