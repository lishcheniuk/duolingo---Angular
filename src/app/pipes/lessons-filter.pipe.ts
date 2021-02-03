import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lessonsFilter',
})
export class LessonsFilterPipe implements PipeTransform {
  transform(lessons, row) {
    let lessonsFilter = lessons.filter((item) => item.row === row);

    if (lessonsFilter.length > 3) {
      lessonsFilter = lessonsFilter.splice(0, 3);
    }

    return lessonsFilter;
  }
}
