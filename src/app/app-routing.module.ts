import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuotesDisplayComponent } from './components/quotes-display/quotes-display.component';

const routes: Routes = [
  { path: 'quotes', component: QuotesDisplayComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo:'quotes', pathMatch:"full"},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
