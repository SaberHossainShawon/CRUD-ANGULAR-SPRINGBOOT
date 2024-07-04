import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourselistComponent } from './courselist/courselist.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    
    {
        path:"course/:id",
        component:UpdatecourseComponent
    },
    {
        path:'courselist',
        component:CourselistComponent
    }

];
