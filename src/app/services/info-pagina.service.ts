import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {

    // console.log('Servicio de infoPaginaService listo!');
    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;

        // console.log(resp);
      });
  }

  private cargarEquipo(){

    this.http.get('https://angular-html-13ff6-default-rtdb.firebaseio.com/%20equipo.json')
    .subscribe( (resp: any) => {

      this.equipo = resp;

      // console.log(resp);
    });

  }

}
