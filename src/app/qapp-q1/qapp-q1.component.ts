import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qapp-q1',
  templateUrl: './qapp-q1.component.html',
  styleUrls: ['./qapp-q1.component.css'],
})
export class QappQ1Component implements OnInit {
  text: string = '';
  press1: boolean = false;
  text2: string = '';
  music = new Audio();

  closemusic() {
    if (this.music.paused) {
      this.music.play();
    } else {
      this.music.pause();
    }
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
  gotoq2() {}
  ngOnInit(): void {}
}
