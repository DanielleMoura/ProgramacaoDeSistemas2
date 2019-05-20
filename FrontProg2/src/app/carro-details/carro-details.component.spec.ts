import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroDetailsComponent } from './carro-details.component';

describe('CarroDetailsComponent', () => {
  let component: CarroDetailsComponent;
  let fixture: ComponentFixture<CarroDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
