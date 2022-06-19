import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calapp',
  templateUrl: './calapp.component.html',
  styleUrls: ['./calapp.component.css'],
})
export class CalappComponent implements OnInit {
  first = '';
  second = '';

  ngOnInit(): void {}

  onClick(value: any) {
    this.first += value;
  }
}
