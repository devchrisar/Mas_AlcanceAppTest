import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumsService } from '@data/services/albums.service';
import { AlbumModel } from '@data/services/api/models/album.model';

@Injectable({
    providedIn: 'root',
})

export class FindAlbumByidUsecase {
    constructor(private albumsService: AlbumsService) {}

    execute(userId: number): Observable<AlbumModel[]> {
        return this.albumsService.getAlbumsByUserId(userId);
    }
}