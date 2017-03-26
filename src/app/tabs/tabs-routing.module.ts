import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { InfoComponent } from '../info/info.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'user',
                component: UserComponent,
            },
            {
                path: 'info',
                component: InfoComponent,
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule { }
