import { Injectable } from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';
import { AgeRange, DynamicRole, FashionStyle, RelationshipEnergy } from './enums';

@Injectable()
export class QuestionService {
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'favoriteAnimal',
        label: 'Favorite Animal',
        options: [
          { key: 'cat', value: 'Cat' },
          { key: 'dog', value: 'Dog' },
          { key: 'horse', value: 'Horse' },
          { key: 'capybara', value: 'Capybara' },
        ],
        order: 3,
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Alex',
        required: true,
        order: 1,
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }

  getIdentityQuestions() {
    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'name',
        label: 'Name',
        type: 'string',
        order: 1,
      }),
      new DropdownQuestion({
        key: 'ageRange',
        label: 'Age Range',
        type: 'string',
        order: 2,
        options: Object.values(AgeRange).map(
          value => ({ key: String(value), value: String(value) })
        ),
        }),
      new TextboxQuestion({
        key: 'occupation',
        label: 'Occupation',
        type: 'string',
        order: 3,
      }),
      new TextboxQuestion({
        key: 'publicPersonality',
        label: 'Public Personality in 3 Words',
        type: 'string',
        order: 4,
      }),
      new DropdownQuestion({
        key: 'fashionStyle',
        label: 'Fashion Style',
        type: 'string',
        order: 5,
        options: Object.values(FashionStyle).map(
          value => ({ key: String(value), value: String(value) })
        ),
      }),
      new TextboxQuestion({
        key: 'scent',
        label: 'Signature Scent',
        type: 'string',
        order: 6,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }

  getPhysicalCluesQuestions() {
    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'height',
        label: 'Height',
        type: 'number',
        order: 1,
      }),
      new TextboxQuestion({
        key: 'build',
        label: 'Build',
        type: 'string',
        order: 2,
      }),
      new TextboxQuestion({
        key: 'distinguishingMarks',
        label: 'Scar, tattoo, birthmark?',
        type: 'string',
        order: 3,
      }),
      // distinguishingMarks?: {
      //   scar?: string;
      //   tattoo?: string;
      //   birthmark?: string;
      // };
      new TextboxQuestion({
        key: 'weakSpot',
        label: 'A spot that makes you weak when touched',
        type: 'string',
        order: 4,
      }),
      new TextboxQuestion({
        key: 'secretlyLovedTouch',
        label: 'A touch you pretend not to like but secretly love',
        type: 'string',
        order: 5,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }

  getSecretHistoryQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'RelationshipEnergy',
        label: 'Relationship energy',
        type: 'string',
        order: 1,
        options: Object.values(RelationshipEnergy).map(
          value => ({ key: String(value), value: String(value) })
        ),
      }),
      new TextboxQuestion({
        key: 'biggestEmotionalWeakness',
        label: 'Biggest emotional weakness',
        type: 'string',
        order: 2,
      }),
      new TextboxQuestion({
        key: 'unspokenSecret',
        label: 'Something you\'ve never admitted to anyone',
        type: 'string',
        order: 3,
      }),
      new TextboxQuestion({
        key: 'instantMeltTrigger',
        label: 'One thing that would instantly make you melt',
        type: 'string',
        order: 4,
      }),
      new TextboxQuestion({
        key: 'destabilizingTone',
        label: 'Tone of voice that ruins you',
        type: 'string',
        order: 5,
      }),
      new TextboxQuestion({
        key: 'composureLossMoment',
        label: 'The moment that makes you lose composure',
        type: 'string',
        order: 6,
      }),
      new TextboxQuestion({
        key: 'vulnerableFantasy',
        label: 'A fantasy you\'d only confess when vulnerable',
        type: 'string',
        order: 7,
      }),
      new TextboxQuestion({
        key: 'deniedKink',
        label: 'A kink you deny at first',
        type: 'string',
        order: 8,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }

  getBehaviorProfileQuestions() {
    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'nervousResponse',
        label: 'When nervous, you…',
        type: 'string',
        order: 1,
      }),
      new TextboxQuestion({
        key: 'arousalResponse',
        label: 'When turned on, you…',
        type: 'string',
        order: 1,
      }),
      new TextboxQuestion({
        key: 'jealousyResponse',
        label: 'When jealous, you…',
        type: 'string',
        order: 1,
      }),
      new TextboxQuestion({
        key: 'controlBehavior',
        label: 'When you take control, you…',
        type: 'string',
        order: 1,
      }),
      new TextboxQuestion({
        key: 'submissionBehavior',
        label: 'When you submit, you…"',
        type: 'string',
        order: 1,
      }),
      new DropdownQuestion({
        key: 'dynamicRole',
        label: 'You are…',
        type: 'string',
        order: 1,
        options: Object.values(DynamicRole).map(
          value => ({ key: String(value), value: String(value) })
        ),
      }),
      new TextboxQuestion({
        key: 'craves',
        label: 'You crave…"',
        type: 'string',
        order: 1,
      }),
      new TextboxQuestion({
        key: 'fears',
        label: 'You fear…',
        type: 'string',
        order: 1,
      }),
      new TextboxQuestion({
        key: 'hardBoundary',
        label: 'Your hard boundary is…',
        type: 'string',
        order: 1,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}