import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-translate-type',
  templateUrl: './translate-type.component.html',
  styleUrls: ['./translate-type.component.scss'],
})
export class TranslateTypeComponent implements AfterViewInit {
  @Input() answerValue;
  @Input() disabledAnswers;
  @Output() writeAnswer = new EventEmitter();
  @ViewChild('textRef') textRef: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.textRef.nativeElement.focus();
  }

  inputHandler(e) {
    this.writeAnswer.emit(e.target.value);
  }
}
