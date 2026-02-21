import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionService } from './dynamic-form-question/question.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [QuestionService],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterOutlet],
})
export class App {
  protected readonly title = signal('Dark Room');
}
