import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuatiersComponent } from './quatiers.component';

describe('QuatiersComponent', () => {
  let component: QuatiersComponent;
  let fixture: ComponentFixture<QuatiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuatiersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuatiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
