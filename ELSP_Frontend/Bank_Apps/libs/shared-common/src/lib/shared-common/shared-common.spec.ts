import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedCommon } from './shared-common';

describe('SharedCommon', () => {
  let component: SharedCommon;
  let fixture: ComponentFixture<SharedCommon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCommon],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCommon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
