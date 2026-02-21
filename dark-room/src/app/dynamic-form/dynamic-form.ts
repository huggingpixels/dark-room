import { Component, computed, inject, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionControlService } from '../dynamic-form-question/question-control.service';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question';
import { QuestionBase } from '../dynamic-form-question/question-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.html',
  providers: [QuestionControlService],
  imports: [DynamicFormQuestionComponent, ReactiveFormsModule],
})
export class DynamicFormComponent {
  private readonly qcs = inject(QuestionControlService);
  readonly questions = input<QuestionBase<string>[] | null>([]);
  readonly form = computed<FormGroup>(() =>
    this.qcs.toFormGroup(this.questions() as QuestionBase<string>[]),
  );
  payLoad = '';
  onSubmit() {
    this.payLoad = JSON.stringify(this.form().getRawValue());
  }
}
