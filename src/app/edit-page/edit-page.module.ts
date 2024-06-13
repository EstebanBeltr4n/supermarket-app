import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPAgePageRoutingModule } from './edit-page-routing.module';

import { EditPAgePage } from './edit-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPAgePageRoutingModule
  ],
  declarations: [EditPAgePage]
})
export class EditPAgePageModule {}
