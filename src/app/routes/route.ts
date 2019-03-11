import { Routes, RouterModule } from '@angular/router';
import * as base from '../base/index';
import { DrivenChartConfigComponent } from '../pages/widgets/driven-chart-configuration.component';

const routes: Routes = [
    {'path':'', 'redirectTo':'/home', 'pathMatch':'full'},
    {'path':'home', 'component':base.HomepageComponent},
    {'path':'chart', 'component':DrivenChartConfigComponent},
];

export const appRouterModule = RouterModule.forRoot(routes, { useHash: false });