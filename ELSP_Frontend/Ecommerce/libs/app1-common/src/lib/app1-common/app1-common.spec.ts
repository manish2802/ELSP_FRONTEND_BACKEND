import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App1Common } from './app1-common';

describe('App1Common', () => {
  let component: App1Common;
  let fixture: ComponentFixture<App1Common>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App1Common],
    }).compileComponents();

    fixture = TestBed.createComponent(App1Common);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
