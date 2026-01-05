import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { TermsComponent } from './pages/terms.component';
import { PrivacyComponent } from './pages/privacy.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'terms', component: TermsComponent },
	{ path: 'privacy', component: PrivacyComponent },
	{ path: '**', redirectTo: '' }
];
