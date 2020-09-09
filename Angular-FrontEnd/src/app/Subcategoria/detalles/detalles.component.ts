import { Component, OnInit } from '@angular/core';
import { SubCategoriaService } from "../../Service/sub-categoria.service";
import { Subcategoria } from "../../Modelo/Subcategoria";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  subcategoria: Subcategoria = new Subcategoria();
  constructor(private router: Router, private subcategoriaService: SubCategoriaService) { }

  ngOnInit(): void {
    //this.Mostrar();
  }

  // Mostrar(){
  //   let cod = localStorage.getItem("cod");
  //   this.subcategoriaService.getSubcategoria(+cod).subscribe(data => {
  //     this.subcategoria = data;
  //   })
  // }

}
