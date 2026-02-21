import { Component, inject } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form';
import { Observable } from 'rxjs';
import { QuestionBase } from '../dynamic-form-question/question-base';
import { QuestionService } from '../dynamic-form-question/question.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-character-build',
  imports: [DynamicFormComponent, AsyncPipe, MatStepperModule, MatButtonModule, CommonModule],
  templateUrl: './character-build.html',
  styleUrl: './character-build.css',
})
export class CharacterBuildComponent {
  identityQuestions$: Observable<QuestionBase<string>[]> = inject(QuestionService).getIdentityQuestions();
  physicalCluesQuestions$: Observable<QuestionBase<string>[]> = inject(QuestionService).getPhysicalCluesQuestions();
  behaviorProfileQuestions$: Observable<QuestionBase<string>[]> = inject(QuestionService).getBehaviorProfileQuestions();
  secretHistoryQuestions$: Observable<QuestionBase<string>[]> = inject(QuestionService).getSecretHistoryQuestions();
}
