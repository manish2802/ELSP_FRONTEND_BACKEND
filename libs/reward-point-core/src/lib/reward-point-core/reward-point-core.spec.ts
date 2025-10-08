import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RewardPointCore } from './reward-point-core';

describe('RewardPointCore', () => {
  let component: RewardPointCore;
  let fixture: ComponentFixture<RewardPointCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardPointCore],
    }).compileComponents();

    fixture = TestBed.createComponent(RewardPointCore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
