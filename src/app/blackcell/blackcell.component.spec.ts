import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackcellComponent } from './blackcell.component';

describe('BlackcellComponent', () => {
  let component: BlackcellComponent;
  let fixture: ComponentFixture<BlackcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
