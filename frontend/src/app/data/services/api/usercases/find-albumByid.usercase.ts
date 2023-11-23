import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumsService } from '@data/services/albums.service';

@Injectable({
    providedIn: 'root',
})

export class FindAlbumByidUsecase {
    constructor(private albumsService: AlbumsService) {}

    execute(userId: number): Observable<any[]> {
        return this.albumsService.getAlbumsByUserId(userId);
    }
}