import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  @Output() public item = new EventEmitter<number>();
  constructor() { 
  
  }

  ngOnInit() {
  }

  abrir(urlToOpen){
  	let url: string = ''; 
	if (!/^http[s]?:\/\//.test(urlToOpen)) { 
	    url += 'http://'; 
	} 
		url += urlToOpen; 
	window.open(url, '_blank');
  }

}
