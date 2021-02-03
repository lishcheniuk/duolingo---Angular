import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentQuestion',
})
export class CurrentQuestionPipe implements PipeTransform {
  transform(questions, number) {
    return questions.filter((item, idx) => idx === number);
  }
}
