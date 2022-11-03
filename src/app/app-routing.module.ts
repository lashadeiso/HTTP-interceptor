import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { AddCarComponent } from './view/add-car/add-car.component';
import { ReadCarsComponent } from './view/read-cars/read-cars.component';
import { UpdateCarComponent } from './view/update-car/update-car.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      { path: '', component: ReadCarsComponent },
      {
        path: 'create',
        component: AddCarComponent,
        canActivate: [AuthGuard],
      },
      { path: 'update/:id', component: UpdateCarComponent },
    ],
  },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
