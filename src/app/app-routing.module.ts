import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        outlet:'node'
    },
    {
        path:'config',
        component:ConfigComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
