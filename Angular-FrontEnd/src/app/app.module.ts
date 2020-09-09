import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Subcategoria/listar/listar.component';
import { CrearComponent } from './Subcategoria/crear/crear.component';
import { DetallesComponent } from './Subcategoria/detalles/detalles.component';
import { SubCategoriaService } from "./Service/sub-categoria.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CrearComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SubCategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
