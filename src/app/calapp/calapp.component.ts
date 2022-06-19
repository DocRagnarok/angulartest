import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calapp',
  templateUrl: './calapp.component.html',
  styleUrls: ['./calapp.component.css'],
})
export class CalappComponent implements OnInit {
  ngOnInit(): void {
    const number = document.querySelectorAll('[ตัวเลข]');
    const buak = document.querySelectorAll('[คำสั่ง]');
    const คำตอบ = document.querySelector('[เท่ากับ]');
    const ล้าง = document.querySelector('[เคลียร์]');
    const tuaold = document.querySelector('[ตัวเก่า]');
    const tuanew = document.querySelector('[ตัวที่จะกด]');
  }
}
