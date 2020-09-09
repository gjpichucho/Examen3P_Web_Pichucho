import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subcategoria } from "../Modelo/Subcategoria";
@Injectable({
  providedIn: 'root'
})
export class SubCategoriaService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:4000/subcategoria";

  getSubcategoria() {
    return this.http.get<Subcategoria[]>(this.Url);
    
    //return this.http.get(`${this.Url}`);
  }

  create(sub: Subcategoria) {
    return this.http.post<Subcategoria>(this.Url, sub);

  }

  getBySub(cod: string) {
    return this.http.get<Subcategoria>(this.Url + "/sub/" + cod);
  }

  delete(sub:Subcategoria){
    return this.http.delete<Subcategoria>(this.Url+"/"+sub.COD_SUB_CATEGORIA)
  }

  getByCat(cod: string){
    return this.http.get<Subcategoria[]>(this.Url + "/" + cod);
  }



}
