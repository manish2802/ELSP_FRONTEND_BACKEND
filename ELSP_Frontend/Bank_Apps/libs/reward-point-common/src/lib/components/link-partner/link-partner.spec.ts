import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkPartner } from './link-partner';

describe('LinkPartner', () => {
  let component: LinkPartner;
  let fixture: ComponentFixture<LinkPartner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkPartner],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkPartner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
