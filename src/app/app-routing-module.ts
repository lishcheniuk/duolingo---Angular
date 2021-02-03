import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillPageComponent } from './skill-page/skill-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TheoryComponent } from './theory-page/theory-page.component';
import { PracticeComponent } from './practice-page/practice-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'skill',
    component: SkillPageComponent,
    children: [
      { path: 'theory/:id', component: TheoryComponent },
      { path: 'practice/:id', component: PracticeComponent },
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
