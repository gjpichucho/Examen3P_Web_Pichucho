import { Component, OnInit } from '@angular/core';
import { SubCategoriaService } from "../../Service/sub-categoria.service";
import { Subcategoria } from "../../Modelo/Subcategoria";
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  subcategorias: Subcategoria[];
  constructor(private subcategoriaService: SubCategoriaService, private router: Router) { }

  ngOnInit(): void {

    this.subcategoriaService.getSubcategoria().subscribe(data => {
        this.subcategorias = data;
        console.log(this.subcategorias);
      });

  }

  Detallar(subcategoria: Subcategoria) {
    localStorage.setItem("cod", subcategoria.COD_SUB_CATEGORIA.toString());
    this.router.navigate(["details"]);
  }

  Delete(subcategoria: Subcategoria) {
    this.subcategoriaService.delete(subcategoria).subscribe(data => {
      this.subcategorias = this.subcategorias.filter(p=>p!==subcategoria);
      //alert("empleado eliminado");
    })
  }

}
