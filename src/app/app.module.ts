import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LessonComponent } from './shared/components/lesson/lesson.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SkillPageComponent } from './skill-page/skill-page.component';
import { TheoryComponent } from './theory-page/theory-page.component';
import { PracticeComponent } from './practice-page/practice-page.component';
import { LessonsFilterPipe } from './pipes/lessons-filter.pipe';
import { CurrentQuestionPipe } from './pipes/current-question.pipe';
import { SelectTypeComponent } from './practice-page/select-type/select-type.component';
import { InsertTypeComponent } from './practice-page/insert-type/insert-type.component';
import { TranslateTypeComponent } from './practice-page/translate-type/translate-type.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LessonComponent,
    MainPageComponent,
    SkillPageComponent,
    TheoryComponent,
    PracticeComponent,
    LessonsFilterPipe,
    CurrentQuestionPipe,
    SelectTypeComponent,
    InsertTypeComponent,
    TranslateTypeComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
