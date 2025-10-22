import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EnrollmentRequest } from '../dashboard/model/enrollmentrequest';
import { User } from '../dashboard/model/user.model';
import { LoyaltyService } from '../dashboard/service/loyalty.service';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './enrollment.component.html',
})
export class EnrollmentComponent {
  // Data would ideally come from a shared service
  airlinePartners = [
    'Starlux',
    'Singapore Airlines',
    'Emirates',
    'Qatar Airways',
    'All Nippon Airways',
  ];
  user: User;
  selectedPartner = '';

  constructor(private loyaltyService: LoyaltyService, private router: Router) {
    this.user = this.loyaltyService.getUser();
  }

  enroll() {
    if (this.selectedPartner && this.user) {
      const enrollmentData: EnrollmentRequest = {
        bankCustomerId: this.user.bankCustomerId,
        airlinePartner: this.selectedPartner,
        rewardPoints: this.user.rewardPoints,
      };

      this.loyaltyService
        .enrollWithPartner(enrollmentData)
        .subscribe((response) => {
          alert(response.message);
          if (response.success) {
            // Navigate to the dashboard. The dashboard's own routing
            // should handle displaying the home/default view.
            // This is often more robust than deep-linking from another feature.
            this.router.navigate(['/dashboard']);
          }
        });
    } else {
      alert('Please select an airline partner.');
    }
  }
}