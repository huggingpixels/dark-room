import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicFormQuestionComponent } from './dynamic-form-question';


describe('DynamicFormQuestion', () => {
  let component: DynamicFormQuestionComponent;
  let fixture: ComponentFixture<DynamicFormQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormQuestionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DynamicFormQuestionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
