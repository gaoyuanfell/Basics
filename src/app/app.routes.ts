import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
		path:'**',//fallback router must in the last
		component:LoginComponent
	}
]

export default RouterModule.forRoot(appRoutes);