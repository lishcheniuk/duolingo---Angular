import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-insert-type',
  templateUrl: './insert-type.component.html',
  styleUrls: ['./insert-type.component.scss'],
})
export class InsertTypeComponent {
  @Input() answerOptions;
  @Input() disabledAnswers;
  @Output() writeAnswer = new EventEmitter();
  @Output() editAnswer = new EventEmitter();

  selectAnswers = [];

  constructor() {}

  isSelected(answer) {
    return this.selectAnswers.includes(answer);
  }

  clickHandler(value) {
    this.selectAnswers.push(value);
    this.writeAnswer.emit(value);
  }

  deleteAnswerBlock(index) {
    this.selectAnswers = this.selectAnswers.filter((_, idx) => idx !== index);

    this.editAnswer.emit(index);
  }
}
