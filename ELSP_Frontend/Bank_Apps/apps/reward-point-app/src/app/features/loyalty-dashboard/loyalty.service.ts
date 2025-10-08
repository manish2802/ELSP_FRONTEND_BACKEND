import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { EnrollmentRequest } from './enrollment.model';

@Injectable()
export class LoyaltyService {
  constructor() {}

  // This is a fake service method to simulate a POST request
  enrollWithPartner(
    enrollmentData: EnrollmentRequest
  ): Observable<{ success: boolean; message: string }> {
    console.log('Posting enrollment data:', enrollmentData);

    // Simulate a network delay
    return of({
      success: true,
      message: `Successfully enrolled with ${enrollmentData.airlinePartner}.`,
    }).pipe(delay(1000));
  }
}