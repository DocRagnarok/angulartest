import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qapp',
  templateUrl: './qapp.component.html',
  styleUrls: ['./qapp.component.css'],
})
export class QappComponent implements OnInit {
  constructor() {}

  text: string = '';
  press1: boolean = false;
  text2: string = '';
  buttonclick() {
    document.getElementById('interface').style.display = 'none';
    alert('สวัสดี  ' + this.text + '   เรามาเริ่มทำควิซกันเลย');
    document.getElementById('quiz1').style.display = 'flex';
  }
  ansbutton1() {
    if (this.text2 == '2') {
      alert('ยินดีด้วย  ' + this.text + '  คุณตอบถูก ! ไปข้อต่อไปกันเลย !!');
    } else {
      alert('เสียใจด้วย  ' + this.text + '  ลองตอบอีกครั้งนะ !');
    }
  }
  ngOnInit(): void {}
}
