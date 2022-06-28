import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { testobject } from './testget';
@Component({
  selector: 'app-pianoapp',
  templateUrl: './pianoapp.component.html',
  styleUrls: ['./pianoapp.component.css'],
})
export class PianoappComponent implements OnInit {
  constructor(private http: HttpClient) {}
  testlist: testobject[] = [];
  @ViewChild('1press') press1: ElementRef;
  @ViewChild('2press') press2: ElementRef;
  @ViewChild('3press') press3: ElementRef;
  @ViewChild('4press') press4: ElementRef;
  @ViewChild('5press') press5: ElementRef;
  @ViewChild('6press') press6: ElementRef;
  @ViewChild('7press') press7: ElementRef;
  @ViewChild('8press') press8: ElementRef;
  @ViewChild('9press') press9: ElementRef;
  @ViewChild('0press') press0: ElementRef;
  @ViewChild('Qpress') pressQ: ElementRef;
  @ViewChild('Wpress') pressW: ElementRef;
  @ViewChild('Epress') pressE: ElementRef;
  @ViewChild('Rpress') pressR: ElementRef;
  @ViewChild('Tpress') pressT: ElementRef;
  @ViewChild('Ypress') pressY: ElementRef;
  @ViewChild('Upress') pressU: ElementRef;
  @ViewChild('Ipress') pressI: ElementRef;
  @ViewChild('Opress') pressO: ElementRef;
  @ViewChild('Ppress') pressP: ElementRef;
  @ViewChild('PLpress') pressPL: ElementRef;
  @ViewChild('Apress') pressA: ElementRef;
  @ViewChild('Spress') pressS: ElementRef;
  @ViewChild('Dpress') pressD: ElementRef;
  @ViewChild('Fpress') pressF: ElementRef;
  @ViewChild('Gpress') pressG: ElementRef;
  @ViewChild('Hpress') pressH: ElementRef;
  @ViewChild('Jpress') pressJ: ElementRef;
  @HostListener('window:keydown', ['$event'])
  spaceDownEvent(event: KeyboardEvent) {
    if (event.key == '1') {
      const element = this.press1.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/c2.mp3';
      note.load();
      note.play();
    }
    if (event.key == '2') {
      const element = this.press2.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/d2.mp3';
      note.load();
      note.play();
    }
    if (event.key == '3') {
      const element = this.press3.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/e2.mp3';
      note.load();
      note.play();
    }
    if (event.key == '4') {
      const element = this.press4.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/f2.mp3';
      note.load();
      note.play();
    }
    if (event.key == '5') {
      const element = this.press5.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/g2.mp3';
      note.load();
      note.play();
    }
    if (event.key == '6') {
      const element = this.press6.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/a2.mp3';
      note.load();
      note.play();
    }
    if (event.key == '7') {
      const element = this.press7.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/b2.mp3';
      note.load();
      note.play();
    }
    if (event.key == '8') {
      const element = this.press8.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/c3.mp3';
      note.load();
      note.play();
    }
    if (event.key == '9') {
      const element = this.press9.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/d3.mp3';
      note.load();
      note.play();
    }
    if (event.key == '0') {
      const element = this.press0.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/e3.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'q') {
      const element = this.pressQ.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/f3.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'w') {
      const element = this.pressW.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/g3.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'e') {
      const element = this.pressE.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/a3.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'r') {
      const element = this.pressR.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/b3.mp3';
      note.load();
      note.play();
    }
    if (event.key == 't') {
      const element = this.pressT.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/c4.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'y') {
      const element = this.pressY.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/d4.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'u') {
      const element = this.pressU.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/e4.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'i') {
      const element = this.pressI.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/f4.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'o') {
      const element = this.pressO.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/g4.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'p') {
      const element = this.pressP.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/a4.mp3';
      note.load();
      note.play();
    }
    if (event.key == '[') {
      const element = this.pressPL.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/b4.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'a') {
      const element = this.pressA.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/c5.mp3';
      note.load();
      note.play();
    }
    if (event.key == 's') {
      const element = this.pressS.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/d5.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'd') {
      const element = this.pressD.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/e5.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'f') {
      const element = this.pressF.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/f5.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'g') {
      const element = this.pressG.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/g5.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'h') {
      const element = this.pressH.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/a5.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'j') {
      const element = this.pressJ.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/b5.mp3';
      note.load();
      note.play();
    }
  }

  @HostListener('window:keyup', ['$event'])
  spaceUpEvent(event: KeyboardEvent) {
    if (event.key == '1') {
      const element = this.press1.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '2') {
      const element = this.press2.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '3') {
      const element = this.press3.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '4') {
      const element = this.press4.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '5') {
      const element = this.press5.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '6') {
      const element = this.press6.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '7') {
      const element = this.press7.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '8') {
      const element = this.press8.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '9') {
      const element = this.press9.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '0') {
      const element = this.press0.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }

    if (event.key == 'q') {
      const element = this.pressQ.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'w') {
      const element = this.pressW.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'e') {
      const element = this.pressE.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'r') {
      const element = this.pressR.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 't') {
      const element = this.pressT.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'y') {
      const element = this.pressY.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'u') {
      const element = this.pressU.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'i') {
      const element = this.pressI.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'o') {
      const element = this.pressO.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'p') {
      const element = this.pressP.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '[') {
      const element = this.pressPL.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'a') {
      const element = this.pressA.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 's') {
      const element = this.pressS.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'd') {
      const element = this.pressD.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'f') {
      const element = this.pressF.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'g') {
      const element = this.pressG.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'h') {
      const element = this.pressH.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'j') {
      const element = this.pressJ.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
  }
  ngOnInit(): void {
    // this.http
    //   .get<testobject[]>('https://www.anapioficeandfire.com/api/books')
    //   .subscribe((Response) => {
    //     console.log(Response);
    //     this.testlist = Response;
    //   });
  }
}
