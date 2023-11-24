import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FindAlbumByidUsecase } from '@app/data/services/api/usercases/find-albumByid.usercase';
import { AlbumModel } from '@app/data/services/api/models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent {
  albums: AlbumModel[] = [];

  //? se obtiene el id del usuario y se obtiene el album por id
  constructor(
    private route: ActivatedRoute,
    private findAlbumByIdUsecase: FindAlbumByidUsecase,
  ) {}

  ngOnInit(): void {
    //? obtiene el id del usuario de la ruta
    const userId = this.route.snapshot.queryParams['userId'];
    //? se llama al caso de uso para obtener el album por id despues de que se halla recibido la respuesta del servicio de usuarios
    this.findAlbumByIdUsecase.execute(userId).subscribe({
      next: (albums) => {
        this.albums = albums;
        console.log('Albums: ', this.albums);
      },
      error: (error) => {
        console.log('Error fetching albums: ', error);
      },
    });
  }
}
