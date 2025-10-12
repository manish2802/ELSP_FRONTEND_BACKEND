import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App1Core } from './app1-core';

describe('App1Core', () => {
  let component: App1Core;
  let fixture: ComponentFixture<App1Core>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App1Core],
    }).compileComponents();

    fixture = TestBed.createComponent(App1Core);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
