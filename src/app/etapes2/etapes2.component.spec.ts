import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapes2Component } from './etapes2.component';

describe('Etapes2Component', () => {
  let component: Etapes2Component;
  let fixture: ComponentFixture<Etapes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etapes2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etapes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
