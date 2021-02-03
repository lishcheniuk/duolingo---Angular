import { Component } from '@angular/core';
import { LessonsService } from '../shared/lessons.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  visibleModalLesson = null;
  lessonsToRows = Array(10).fill('_');

  constructor(public service: LessonsService) {}

  showModalLesson(lessonNumber) {
    if (this.visibleModalLesson === lessonNumber) {
      this.visibleModalLesson = null;
    } else {
      this.visibleModalLesson = lessonNumber;
    }
  }

  lessonNumber(row, cell) {
    return (
      this.service.lessons.filter((item) => item.row < row).length + cell + 1
    );
  }
}
