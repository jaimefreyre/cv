import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientesComponent } from './clientes/clientes.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ProductosComponent } from './productos/productos.component';
import { CotizarComponent } from './cotizar/cotizar.component';
import { BioComponent } from './bio/bio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HistorialComponent } from './historial/historial.component';
import { ProyectosComponent } from './proyectos/proyectos.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    InformacionComponent,
    ProductosComponent,
    CotizarComponent,
    BioComponent,
    ContactoComponent,
    HistorialComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
