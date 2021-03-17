import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NzSpinModule } from 'ng-zorro-antd/spin';
// Components
import { ShipsComponent } from '../ships/ships.component';
import { PageOneComponent } from '../page-one/page-one.component';
import { PageTwoComponent } from '../page-two/page-two.component';
import { ShipsDetailsComponent } from '../ships/ships-details/ships-details.component';
import { NzSpinInsideComponent } from '../ng-zorro/nz-spin-inside/nz-spin-inside.component';

@NgModule({
  declarations: [
    ShipsComponent,
    ShipsDetailsComponent,
    PageOneComponent,
    PageTwoComponent,
    NzSpinInsideComponent
  ],
  imports: [
    CommonModule,
    PrincipalComponentsRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NzSpinModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PrincipalModule { }