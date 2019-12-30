import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from 'src/app/about-us/about-us.component';
import { HowItWorksComponent } from 'src/app/how-it-works/how-it-works.component';
import {SearchPageComponent} from './search-page/search-page.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'howItWorks', component: HowItWorksComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
