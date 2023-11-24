import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@app/layout/skeleton/skeleton.component';
//* Paginas
import { HomeComponent } from '@app/layout/home/home.component';
import { AlbumsComponent } from '@app/layout/albums/albums.component';
import { RequestComponent } from './layout/logs/request/request.component';

const routes: Routes = [
  {
    //? aqui defino la ruta principal / y le digo que cargue el componente SkeletonComponent que
    //? es el que tiene el router-outlet y dentro de este se cargaran los demas componentes
    path: '',
    component: SkeletonComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'requests', component: RequestComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
