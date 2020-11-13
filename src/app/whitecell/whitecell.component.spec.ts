import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitecellComponent } from './whitecell.component';

describe('WhitecellComponent', () => {
  let component: WhitecellComponent;
  let fixture: ComponentFixture<WhitecellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitecellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitecellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
