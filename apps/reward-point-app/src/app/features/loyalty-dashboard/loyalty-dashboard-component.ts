import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../user.model';
import { LoyaltyService } from './loyalty.service';
import { EnrollmentRequest } from './enrollment.model';

@Component({
  selector: 'app-loyalty-dashboard-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loyalty-dashboard-component.html',
  styleUrl: './loyalty-dashboard-component.css',
  providers: [LoyaltyService],
})
export class LoyaltyDashboardComponent {
  airlinePartners = [
    'Starlux',
    'Singapore Airlines',
    'Emirates',
    'Qatar Airways',
    'All Nippon Airways',
  ];

  showEnrollmentForm = false;

  user: User = {
    firstname: 'John',
    lastname: 'Doe',
    emailid: 'john.doe@example.com',
    phone: '123-456-7890',
    bankCustomerId: 'CUST12345',
  };

  selectedPartner = '';

  constructor(private loyaltyService: LoyaltyService) {}

  toggleEnrollmentForm() {
    this.showEnrollmentForm = !this.showEnrollmentForm;
  }

  enroll() {
    if (this.selectedPartner) {
      const enrollmentData: EnrollmentRequest = {
        bankCustomerId: this.user.bankCustomerId,
        airlinePartner: this.selectedPartner,
      };

      this.loyaltyService
        .enrollWithPartner(enrollmentData)
        .subscribe((response) => {
          alert(response.message);
          if (response.success) {
            this.showEnrollmentForm = false;
          }
        });
    } else {
      alert('Please select an airline partner.');
    }
  }
}
