import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentReadComponent } from './establishment-read.component';

describe('EstablishmentReadComponent', () => {
  let component: EstablishmentReadComponent;
  let fixture: ComponentFixture<EstablishmentReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
