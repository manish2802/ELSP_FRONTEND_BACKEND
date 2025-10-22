import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// A simple component to show on the dashboard's home page.
@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-component.html'
})
export class DashboardComponent {}
