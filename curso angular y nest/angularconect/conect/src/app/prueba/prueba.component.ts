import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  ngOnInit(): void {
    this.papa()
  }
  papa():any{
    console.log('papa')
  }
}
