import {RouterModule} from "@angular/router";

import { MenuComponent } from './menu/menu.component'

const mangeRoutes = [
  	{
		path:'',
		component:MenuComponent,
	    children: [
	    	{ path: '', component: MenuComponent }
	    ]
	}
];
export default RouterModule.forChild(mangeRoutes);