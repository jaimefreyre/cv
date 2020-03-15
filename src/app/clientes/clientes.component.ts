import { Component, OnInit, ViewChild, Renderer2, ElementRef  } from '@angular/core';
import { Modelo_Proyectos, Exclusivos, App, Marketing, Ubers, Ecommerce, Stock, Turnos } from '../MapeoBBDD/models';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {
  @ViewChild("subMenu") subMenu: ElementRef;
  opened:boolean;  
  vista:number;
  menues:any;
  infoProyecto:object /*= new Modelo_Proyectos('','','',0,'','')*/;
  
  constructor(Sidemenu:MatSidenavModule, private renderer: Renderer2, ElementRef: ElementRef) { 
    this.menues = Sidemenu;
  }

  //Funciones
  verificaSesion(){
    console.log('Se activo el verificador de sesiones');
  }
  seleccionarVista(e){
    this.vista = e;
    console.log(this.vista);
  }
  verItems(){
    this.renderer.removeClass(this.subMenu.nativeElement, "oculto");
    this.renderer.addClass(this.subMenu.nativeElement, "visible");
  }
  ocultarItems(){
    this.renderer.removeClass(this.subMenu.nativeElement, "visible");
    this.renderer.addClass(this.subMenu.nativeElement, "oculto");
  }
  accionItem(valor){
    this.seleccionarVista(valor);
    this.ocultarItems();
  }
  creaInterface(dir){
    switch (dir) {
      case 1:
        this.infoProyecto = new Exclusivos();
      break;
      
      case 2:
        this.infoProyecto = new App();
        // code...
      break;
      
      case 3:
        this.infoProyecto = new Marketing();
        // code...
      break;
      
      case 4:
        this.infoProyecto = new Ubers();
        // code...
      break;
      
      case 5:
        this.infoProyecto = new Stock();
        // code...
      break;

      case 6:
        this.infoProyecto = new Turnos();
        // code...
      break;

      case 7:
        this.infoProyecto = new Ecommerce();
        // code...
      break;
      
      default:
        // code...
        break;
    }
    console.log(this.infoProyecto);
  }

  //Estados o Eventos de Estado
  ngOnInit() {
 
  }

  //Modelos

  javascript = {
    Tipo : 'horizontalBar',
    Titulo: 'Javascript',
    Opt : {
      scaleShowVerticalLines: false,
      responsive: true
    },
    Data : [
      { data: [95, 100, 90, 75, 100, 75, 1], label: 'Evaluacion Udemy' },
      { data: [82, 95, 78, 70, 85, 88, 1], label: 'Evaluacion Freelancer' }
    ],
    Labels : ['Jquery', 'AngularJs', 'Angular5', 'React', 'Ionic 3', 'NodeJs']
  };
    
  python = {
    Tipo : 'bar',
    Titulo: 'Python',
    Opt : {
      scaleShowVerticalLines: false,
      responsive: true
    },
    Data : [
      { data: [80, 72, 95, 1], label: 'Evaluacion IMEI' }
    ],
    Labels : ['Python', 'Django', 'Scrapy' ]
  }

  php = {
    Tipo : 'horizontalBar',
    Titulo : 'PHP',
    Opt : {
      scaleShowVerticalLines: false,
      responsive: true
    },
    Data : [
      { data: [90, 65, 88, 100, 58, 35, 1], label: 'Evaluacion Udemy' },
      { data: [98, 75, 90, 100, 71, 47, 1], label: 'Evaluacion Freelancer' }
    ],
    Labels : ['PHP PDD', 'Laravel', 'ActiveRecord PHP', 'PHPMYADMIN', 'Magento', 'Slim']
  }

  bases={
    Tipo : 'horizontalBar',
    Titulo : 'Bases de Datos',
    Opt : {
      scaleShowVerticalLines: false,
      responsive: true
    },
    Data : [
      { data: [100, 50, 90, 78, 100, 45, 1], label: 'Evaluacion Workana, Nubelo' },
      { data: [98, 65, 78, 60, 100, 75, 1], label: 'Evaluacion Freelancer' }
    ],
    Labels : ['Mysql', 'PostgresSQL', 'MongoDB', 'Firebase', 'JSON', 'OracleDB']
  }

  versionado = {
    Tipo : 'horizontalBar',
    Titulo : 'Versionado y Herramientas',
    Opt : {
      scaleShowVerticalLines: false,
      responsive: true
    },
    Data : [
      { data: [100, 100, 72, 66, 100, 82, 68, 72, 1], label: 'Conocimiento Tecnico' }
    ],
    Labels : ['Github', 'Bower', 'PiP', 'Heroku', 'GoogleMaps API', 'Facebook API', 'Google API', 'MercadoLibre API']
  }

  Lenguajes = {
    Tipo : 'horizontalBar',
    Titulo: 'Leguajes',
    Opt :{
      scaleShowVerticalLines: false,
      responsive: true
    },
    Data :[
      { data: [95, 100, 72, 85, 77, 95, 68, 1], label: 'Evaluacion Udemy' },
      { data: [99, 95, 78, 60, 85, 75, 55, 1], label: 'Evaluacion Freelancer' }
    ],
    Labels :['HTML5', 'CSS', 'JAVA', 'C++', 'Android', 'Bootstrap4', 'LINUX']
  }

  tecnologiasEvalua = [this.Lenguajes, this.javascript, this.python, this.php, this.bases, this.versionado];

  //Objetos Informacion
  Biografia = {
    'titulo': 'Ezequiel <br> Miceli',
    'subtitulo': 'Desarrollador FullStack',
    'back': '../../assets/IMG_20181018_165400.jpg',
    'avatar': '../../assets/IMG_20181018_165400.jpg',
    'cuerpo': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis atque, iure eligendi illo quam expedita vero ipsum similique, esse ratione debitis aperiam provident excepturi rerum saepe, praesentium maiores asperiores totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, soluta modi esse accusantium sit velit cupiditate minima ipsam ex, sunt eaque quas dignissimos fugiat itaque fuga unde minus totam sequi?'
  }

  Producto = [
  {
    'titulo': 'Nombre Producto',
    'subtitulo': 'Explicacion',
    'back': 'Fondo',
    'avatar': 'Avatar',
    'cuerpo': 'Utilidades y Ventajas'
  }];





}

/*
 lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,1)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(0,0,0,1)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(25,150,255,1)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];*/