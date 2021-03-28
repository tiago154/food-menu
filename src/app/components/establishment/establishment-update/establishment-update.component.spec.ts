import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentUpdateComponent } from './establishment-update.component';

describe('EstablishmentUpdateComponent', () => {
  let component: EstablishmentUpdateComponent;
  let fixture: ComponentFixture<EstablishmentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
