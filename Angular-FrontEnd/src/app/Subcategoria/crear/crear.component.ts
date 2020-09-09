import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubCategoriaService } from "../../Service/sub-categoria.service";
import { Subcategoria } from "../../Modelo/Subcategoria";
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  subcategoria: Subcategoria = new Subcategoria();
  constructor(private router:Router, private empleadoService:SubCategoriaService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.empleadoService.create(this.subcategoria).subscribe(data=>{
      //alert("Se Agrego con Exito...!!!");
     
      this.router.navigate(["listar"]);
    })
  }

}
