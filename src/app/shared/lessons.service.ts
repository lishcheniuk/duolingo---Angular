import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LessonsService {
  lessons: any[] = [
    { title: 'Основы', id: '1111', icon: 'fa-apple-alt', row: 0 },
    { title: 'Одежда', id: '2222', icon: 'fa-socks', row: 1 },
    { title: 'Семья', id: '3333', icon: 'fa-users', row: 1 },
    { title: 'Фразы', id: '4444', icon: 'fa-comment-dots', row: 2 },
  ];

  questions = getQuestion();

  getLessonQuestions(id) {
    return this.questions.filter((item) => item.lessonId === id);
  }
}

function getQuestion() {
  return [
    {
      task: 'Введите перевод на русский',
      type: 'insert',
      sentence: 'They are spouses.',
      answers: ['мальчики', 'блузка', 'сок', 'супруги', 'Они', 'вопросы'],
      rightAnswer: 'Они супруги',
      lessonId: '1111',
    },
    {
      task: 'Заполните пропуск',
      type: 'select',
      sentence: 'He sees a bird and ____ egg.',
      answers: ['a', 'an'],
      rightAnswer: 'an',
      lessonId: '1111',
    },
    {
      task: 'Введите перевод на русский',
      type: 'translate',
      sentence: 'She sees a girl.',
      rightAnswer: 'Она видит девочку',
      lessonId: '1111',
    },

    {
      task: 'Выберите верный перевод',
      type: 'select',
      sentence: 'Я вижу женщину.',
      answers: ['I see an apple', 'I see a woman', 'I see a book'],
      rightAnswer: 'I see a woman',
      lessonId: '1111',
    },
    {
      task: 'Введите перевод на русский',
      type: 'insert',
      sentence: 'I want to marry you.',
      answers: [
        'девочка',
        'жениться',
        'хочу',
        'Я',
        'брат',
        'свинья',
        'на',
        'тебе',
      ],
      rightAnswer: 'Я хочу жениться на тебе',
      lessonId: '2222',
    },
  ];
}
