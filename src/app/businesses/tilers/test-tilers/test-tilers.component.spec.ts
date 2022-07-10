import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTilersComponent } from './test-tilers.component';

describe('TestTilersComponent', () => {
  let component: TestTilersComponent;
  let fixture: ComponentFixture<TestTilersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTilersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTilersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
