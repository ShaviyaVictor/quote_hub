import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteInsightsComponent } from './quote-insights.component';

describe('QuoteInsightsComponent', () => {
  let component: QuoteInsightsComponent;
  let fixture: ComponentFixture<QuoteInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
