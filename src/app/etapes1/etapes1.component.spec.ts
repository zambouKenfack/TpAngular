import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapes1Component } from './etapes1.component';

describe('Etapes1Component', () => {
  let component: Etapes1Component;
  let fixture: ComponentFixture<Etapes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etapes1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etapes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
