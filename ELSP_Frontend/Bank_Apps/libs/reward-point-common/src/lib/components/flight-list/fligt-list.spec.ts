import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FligtList } from './fligt-list';

describe('FligtList', () => {
  let component: FligtList;
  let fixture: ComponentFixture<FligtList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FligtList],
    }).compileComponents();

    fixture = TestBed.createComponent(FligtList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
