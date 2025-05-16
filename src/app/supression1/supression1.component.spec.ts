import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supression1Component } from './supression1.component';

describe('Supression1Component', () => {
  let component: Supression1Component;
  let fixture: ComponentFixture<Supression1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Supression1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supression1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
