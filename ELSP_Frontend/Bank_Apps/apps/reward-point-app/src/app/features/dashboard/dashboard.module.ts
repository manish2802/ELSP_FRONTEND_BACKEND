import { RouterModule, Routes } from "@angular/router";
import { EnrollmentComponent } from "../enrollment-partner/enrollment.component";
import { TransferPointsComponent } from "../transfer-miles/transfer-points.component";
import { DashboardComponent } from "./dashboard-component"; // This is the default view inside the dashboard

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent, // Use the main layout component
    children: [
      // When the path is /dashboard, show the landing component
      { path: '', component: DashboardComponent }
      //{ path: 'enroll', component: EnrollmentComponent },
      //{ path: 'transfer', component: TransferPointsComponent },
    ],
  },
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}