import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentCrudComponent } from './establishment-crud.component';

describe('EstablishmentCrudComponent', () => {
  let component: EstablishmentCrudComponent;
  let fixture: ComponentFixture<EstablishmentCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
