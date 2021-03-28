import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentDeleteComponent } from './establishment-delete.component';

describe('EstablishmentDeleteComponent', () => {
  let component: EstablishmentDeleteComponent;
  let fixture: ComponentFixture<EstablishmentDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
