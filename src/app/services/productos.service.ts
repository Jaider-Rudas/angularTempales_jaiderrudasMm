import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInf } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  constructor(private http: HttpClient) {

    this.cargarProductos();

  }

  private cargarProductos() {

    this.http.get('https://angular-html-13ff6-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any) => {
        
        this.cargando = false

        console.log(resp);

      });
  }
}
