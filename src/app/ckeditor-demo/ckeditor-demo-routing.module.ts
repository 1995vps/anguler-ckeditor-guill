import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CkComponent } from './ck/ck.component';

const routes: Routes = [
  {
    path: '',
    component: CkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CkeditorDemoRoutingModule {}
