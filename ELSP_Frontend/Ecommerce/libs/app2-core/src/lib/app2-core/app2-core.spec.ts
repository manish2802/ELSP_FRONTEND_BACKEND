import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App2Core } from './app2-core';

describe('App2Core', () => {
  let component: App2Core;
  let fixture: ComponentFixture<App2Core>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App2Core],
    }).compileComponents();

    fixture = TestBed.createComponent(App2Core);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
