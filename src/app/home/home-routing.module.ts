import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            // {
            //     path: '',
            //     children: [
            //         {
            //             path: 'home1',
            //             component: Home1Component,
            //         },
            //         {
            //             path: 'home2',
            //             component: Home2Component,
            //             outlet: 'test'
            //         },
            //         {
            //             path: '',
            //             redirectTo: 'home1',
            //             pathMatch: 'full'
            //         }
            //     ]
            // },
            {
                path: 'home1',
                component: Home1Component,
            },
            {
                path: 'home2',
                component: Home2Component,
                outlet:'test'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
