import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qapp',
  templateUrl: './qapp.component.html',
  styleUrls: ['./qapp.component.css'],
})
export class QappComponent implements OnInit {
  constructor() {}
  yourname: string = '';
  clicked: boolean = false;
  ngOnInit(): void {}
}
