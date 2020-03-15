import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
	@Input() public info_proyecto:any ;
	@Output() public emite = new EventEmitter<boolean>();

	constructor(){}
	ngOnInit(){}

}
