import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {DynamicFormModule} from './usercontrols/formbuilder/dynamicform.module';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import * as base from './base/index';
import {appRouterModule} from './routes/route';
import { HttpModule } from '@angular/http';
import {ProviderModule} from './providers/provider.module';
import { DbConnectionComponent } from './pages/db-connection/db-connection.component';
import { ChartModule } from 'angular-highcharts';
import { DrivenChartComponent } from './pages/widgets/driven-chart.component';
import { DrivenChartConfigComponent } from './pages/widgets/driven-chart-configuration.component';
@NgModule({
  declarations: [
    AppComponent,
    base.HeaderComponent,
    base.HomepageComponent,
    base.FooterComponent,
    base.SideNavComponent,
    base.RightSideNavComponent,
    DbConnectionComponent,
    DrivenChartComponent,
    DrivenChartConfigComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ChartModule,
    DynamicFormModule,
    FormsModule,
    ReactiveFormsModule,
    appRouterModule,
    ProviderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
