import { Component, inject } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form';
import { Observable } from 'rxjs';
import { QuestionBase } from '../dynamic-form-question/question-base';
import { QuestionService } from '../dynamic-form-question/question.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-character-build',
  imports: [DynamicFormComponent, AsyncPipe],
  templateUrl: './character-build.html',
  styleUrl: './character-build.css',
})
export class CharacterBuildComponent {
  questions$: Observable<QuestionBase<string>[]> = inject(QuestionService).getQuestions();
}
