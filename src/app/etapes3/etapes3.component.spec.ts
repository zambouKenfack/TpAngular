import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapes3Component } from './etapes3.component';

describe('Etapes3Component', () => {
  let component: Etapes3Component;
  let fixture: ComponentFixture<Etapes3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etapes3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etapes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
