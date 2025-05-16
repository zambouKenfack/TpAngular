import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupressionComponent } from './supression.component';

describe('SupressionComponent', () => {
  let component: SupressionComponent;
  let fixture: ComponentFixture<SupressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
