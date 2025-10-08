import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCore } from './admin-core';

describe('AdminCore', () => {
  let component: AdminCore;
  let fixture: ComponentFixture<AdminCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCore],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
