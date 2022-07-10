import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPainterComponent } from './test-painter.component';

describe('TestPainterComponent', () => {
  let component: TestPainterComponent;
  let fixture: ComponentFixture<TestPainterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPainterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
