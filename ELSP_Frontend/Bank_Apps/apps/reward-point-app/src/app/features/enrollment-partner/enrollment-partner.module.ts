import { RouterModule, Routes } from '@angular/router';
import { EnrollmentComponent } from './enrollment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkPartner } from '@myngapp/reward-point-common';

const routes: Routes = [
  { path: '', component: EnrollmentComponent },
  { path: 'linked-partner', component: LinkPartner },
];

  
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class EnrollmentPartnerModule {}
