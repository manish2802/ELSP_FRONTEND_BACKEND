import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './features/pagenotfound/page-not-found.component';
import { NavBar } from '@myngapp/reward-point-common';


@Component({
  standalone: true,
  imports: [RouterModule, PageNotFoundComponent, NavBar],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'reward-point-app';
}
