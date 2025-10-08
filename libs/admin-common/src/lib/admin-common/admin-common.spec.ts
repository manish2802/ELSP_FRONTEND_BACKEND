import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCommon } from './admin-common';

describe('AdminCommon', () => {
  let component: AdminCommon;
  let fixture: ComponentFixture<AdminCommon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCommon],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCommon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
