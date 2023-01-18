import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsPreviewComponent } from './statistics-preview.component';

describe('StatisticsPreviewComponent', () => {
  let component: StatisticsPreviewComponent;
  let fixture: ComponentFixture<StatisticsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
