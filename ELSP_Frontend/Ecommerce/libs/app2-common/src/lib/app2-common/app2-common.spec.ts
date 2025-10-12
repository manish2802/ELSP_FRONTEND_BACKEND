import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App2Common } from './app2-common';

describe('App2Common', () => {
  let component: App2Common;
  let fixture: ComponentFixture<App2Common>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App2Common],
    }).compileComponents();

    fixture = TestBed.createComponent(App2Common);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
