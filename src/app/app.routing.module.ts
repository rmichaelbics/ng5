import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterState } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about/:id',
        component: AboutComponent
    },
    {
        path: 'employee',
        component: EmployeeComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}


