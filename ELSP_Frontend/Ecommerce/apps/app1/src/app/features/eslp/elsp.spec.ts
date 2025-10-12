import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Elsp } from './elsp';

describe('Elsp', () => {
  let component: Elsp;
  let fixture: ComponentFixture<Elsp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elsp],
    }).compileComponents();

    fixture = TestBed.createComponent(Elsp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
