import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetComponent } from './asset.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    AssetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AssetRoutingModule,
    
  ]
})
export class AssetModule { }
