import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItensRoutingModule } from './itens-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { ItenReducer } from './store/itens.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItensEffect } from './store/itens.effect';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [HomeComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    ItensRoutingModule,
    FormsModule,
    StoreModule.forFeature('myitens', itenReducer),
    EffectsModule.forFeature([ItensEffect]),
  ],
})
export class ItensModule {}
