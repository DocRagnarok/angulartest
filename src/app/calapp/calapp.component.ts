import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calapp',
  templateUrl: './calapp.component.html',
  styleUrls: ['./calapp.component.css'],
})
export class CalappComponent implements OnInit {
  first = '';
  second = '';
  equal: number;
  clicked: Boolean = false;
  clickclear = false;
  type: string = '';

  clear = '';

  ngOnInit(): void {}

  onClick(value: string) {
    if (this.clicked) {
      this.second += value;
    } else {
      this.first += value;
    }
  }
  onClickOperation(type: any) {
    this.clicked = true;
    this.type = type;
  }
  onClickEqual() {
    console.log(this.type);
    if (this.type == 'buak') {
      const x = parseFloat(this.first);
      const y = parseFloat(this.second);
      this.equal = x + y;
      this.equal = parseFloat((x + y).toFixed(2));
      console.log(this.equal);
    }
    if (this.type == 'rob') {
      const x = parseFloat(this.first);
      const y = parseFloat(this.second);
      this.equal = x - y;
      this.equal = parseFloat((x - y).toFixed(2));
      console.log(this.equal);
    }
    if (this.type == 'koon') {
      const x = parseFloat(this.first);
      const y = parseFloat(this.second);
      this.equal = x * y;
      this.equal = parseFloat((x * y).toFixed(2));

      console.log(this.equal);
    }
    if (this.type == 'han') {
      const x = parseFloat(this.first);
      const y = parseFloat(this.second);
      this.equal = x / y;
      this.equal = parseFloat((x / y).toFixed(2));
      console.log(this.equal);
    }
  }
  onClickClear() {
    this.clickclear = true;
    this.first = '';
    this.second = '';
    this.equal = null;
    this.clicked = false;
  }
  onClickDot(value: any) {
    if (this.clicked) {
      this.second += value;
    } else {
      this.first += value;
    }
  }
  onClickDel() {
    this.equal = null;
    if (!this.clicked) {
      this.first = this.first.slice(0, -1);
    } else {
      if (this.second == '') {
        this.clicked = false;
      } else {
        this.second = this.second.slice(0, -1);
      }
    }
  }
}
