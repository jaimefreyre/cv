import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  @Input() public indicator:number;
  @Input() public info:any ;
  @Output() public abrir = new EventEmitter<boolean>();
  @Output() public cerrar = new EventEmitter<boolean>();
  @Output() public item = new EventEmitter<number>();

  constructor(){}

  ngOnInit() {
    console.log(this.info);
  }

}
