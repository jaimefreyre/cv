import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() public tipo:string;
  @Input() public titulo:string;
  @Input() public data:any;
  @Input() public label:any;
  @Input() public option:any;
  @Output() public abrir = new EventEmitter<boolean>();
  @Output() public cerrar = new EventEmitter<boolean>();
  @Output() public item = new EventEmitter<number>();

  constructor(){}

  ver:boolean = false;

  ngOnInit() {
  }

}
