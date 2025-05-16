import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supression2Component } from './supression2.component';

describe('Supression2Component', () => {
  let component: Supression2Component;
  let fixture: ComponentFixture<Supression2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Supression2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supression2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
