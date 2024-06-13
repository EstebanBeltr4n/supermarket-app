import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPAgePage } from './edit-page.page';

const routes: Routes = [
  {
    path: '',
    component: EditPAgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPAgePageRoutingModule {}
