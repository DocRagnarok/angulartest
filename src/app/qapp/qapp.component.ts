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
  music = new Audio();

  closemusic() {
    this.music.pause();
  }
  buttonclick() {
    if (this.text == '') {
      alert('ใส่ชื่อก่อนเล่นสิวะ');
    } else {
      alert('สวัสดี  ' + this.text + '   เรามาเริ่มทำควิซกันเลย');
      document.getElementById('interface').style.display = 'none';
      document.getElementById('quiz1').style.display = 'flex';
      this.music.src = '../assets/payon.mp3';
      this.music.load();
      this.music.play();
    }
  }
  ansbutton1() {
    if (this.text2 == '') {
      alert('การไม่ตอบก็คือคำตอบ - sun tzu ///ถุย ใส่คำตอบด้วยสิวะ');
      return;
    }
    if (this.text2 == '2') {
      alert('ยินดีด้วย  ' + this.text + '  คุณตอบถูก ! ไปข้อต่อไปกันเลย !!');
    } else {
      alert('เสียใจด้วย  ' + this.text + '  ลองตอบอีกครั้งนะ !');
    }
  }
  ngOnInit(): void {}
}
