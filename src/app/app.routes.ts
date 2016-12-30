import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthGuardService,AuthGuardChildService } from './base/authGuardService';

const appRoutes:Routes = [
    {
        path:'',
        // redirectTo: 'login',
        // pathMatch: 'full',
        canActivateChild:[AuthGuardChildService],
        children:[
            {
                path:'login',
                component:LoginComponent
            }
        ]
    }
]

export default RouterModule.forRoot(appRoutes);