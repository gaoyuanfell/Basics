import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
		path:'**',//fallback router must in the last
		component:LoginComponent
	}
]

export default RouterModule.forRoot(appRoutes);