import {RouterModule} from "@angular/router";

import {HomeComponent} from '../home/home.component';
import {MenuComponent} from './menu/menu.component'

export const mangeRoutes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'menu',
				component: MenuComponent
			}
		]
	}
];
export default RouterModule.forChild(mangeRoutes);
