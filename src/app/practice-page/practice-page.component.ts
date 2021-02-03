import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { LessonsService } from 'src/app/shared/lessons.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice-page.component.html',
  styleUrls: ['./practice-page.component.scss'],
  animations: [
    trigger('animateQuestion', [
      transition(':enter', [
        style({ transform: 'translateX(250px)' }),
        animate(300),
      ]),
    ]),
  ],
})
export class PracticeComponent implements OnInit {
  lessonQuestions = [];
  currentQuestiontNumber = 0;

  answerValue = '';
  answerColor = false;
  isCheck = true;
  countHearts = Array(3).fill('_');
  health = 2;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lessonService: LessonsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.lessonQuestions = this.lessonService.getLessonQuestions(params.id);
    });
  }

  get getQuestion() {
    return this.lessonQuestions[this.currentQuestiontNumber];
  }

  get widthP() {
    return (
      (100 / this.lessonQuestions.length) * this.currentQuestiontNumber + '%'
    );
  }

  resetQuestion() {
    this.isCheck = true;
    this.answerColor = false;
    this.answerValue = '';
  }

  nextQuestion() {
    if (!this.isCheck) {
      this.currentQuestiontNumber = this.currentQuestiontNumber + 1;
      this.resetQuestion();

      if (this.lessonQuestions.length <= this.currentQuestiontNumber) {
        setTimeout(() => {
          alert('Поздравляем! Вы завершили урок.');
          //this.currentQuestiontNumber = 0;
          this.router.navigate(['/']);
        }, 500);
      }
    } else {
      this.check();
    }
  }

  check() {
    let { rightAnswer } = this.getQuestion;

    let answer = this.answerValue
      .split(' ')
      .filter((item) => item)
      .join(' ')
      .toUpperCase();

    if (rightAnswer.toUpperCase() === answer) {
      this.answerColor = true;
    } else {
      this.answerColor = false;

      if (this.health < 0) {
        setTimeout(() => {
          alert('Все жизни использованы. Вы не прошли урок.');
          this.router.navigate(['/']);
        }, 0);
      } else {
        this.health = this.health - 1;
      }
    }

    this.isCheck = false;
  }

  setInsertTypeAnswer(value) {
    this.answerValue = !this.answerValue
      ? value
      : this.answerValue + ' ' + value;
  }

  editInsertTypeAnswer(index) {
    this.answerValue = this.answerValue
      .split(' ')
      .filter((_, idx) => idx !== index)
      .join(' ');
  }
}
