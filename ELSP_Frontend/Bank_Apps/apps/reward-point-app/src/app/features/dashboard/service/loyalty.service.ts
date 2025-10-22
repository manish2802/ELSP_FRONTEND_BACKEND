import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { EnrollmentRequest } from '../model/enrollmentrequest';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoyaltyService {
  // Centralized user data. In a real app, this would come from an auth service.
  private currentUser: User = {
    firstname: 'John',
    lastname: 'Doe',
    emailid: 'john.doe@example.com',
    phone: '123-456-7890',
    bankCustomerId: 'CUST12345',
    rewardPoints: 10000,
  };

  getUser(): User {
    return this.currentUser;
  }

  enrollWithPartner(
    enrollmentData: EnrollmentRequest
  ): Observable<{ success: boolean; message: string }> {
    console.log('Enrolling with partner:', enrollmentData);
    // Simulate an API call
    return of({
      success: true,
      message: `Successfully enrolled ${enrollmentData.bankCustomerId} with ${enrollmentData.airlinePartner}.`,
    }).pipe(delay(500));
  }
}