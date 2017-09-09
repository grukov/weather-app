import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyCitiesComponent } from './my-cities/my-cities.component';
import { AuthService } from 'app/shared/auth.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    { path: 'home', component: HomeComponent },
    { path: 'user', loadChildren: './users/users.module#UsersModule' }
    // { path: '**', component: PageNotFoundComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
