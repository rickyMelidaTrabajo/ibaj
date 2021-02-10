import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CounselingComponent } from './pages/counseling/counseling.component';
import { HomeComponent } from './pages/home/home.component';
import { PrayerMotiveComponent } from './pages/prayer-motive/prayer-motive.component';
import { CounselingDetailsComponent } from './pages/counseling-details/counseling-details.component';
import { ActivitiesDetailsComponent } from "./pages/activities-details/activities-details.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'actividades', component: ActivitiesComponent },
  { path: 'actividad/:id', component: ActivitiesDetailsComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'consejeria', component: CounselingComponent, },
  { path: 'details/:id', component: CounselingDetailsComponent },
  { path: 'intercesion', component: PrayerMotiveComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
