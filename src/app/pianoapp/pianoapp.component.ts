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
  @ViewChild('Qpress') pressQ: ElementRef;
  @ViewChild('Wpress') pressW: ElementRef;
  @ViewChild('Epress') pressE: ElementRef;
  @ViewChild('Rpress') pressR: ElementRef;
  @ViewChild('Tpress') pressT: ElementRef;
  @ViewChild('Ypress') pressY: ElementRef;
  @ViewChild('Upress') pressU: ElementRef;
  @ViewChild('Vpress') pressV: ElementRef;
  @ViewChild('Bpress') pressB: ElementRef;
  @ViewChild('Npress') pressN: ElementRef;
  @ViewChild('Mpress') pressM: ElementRef;
  @ViewChild('COMMApress') pressCOMMA: ElementRef;
  @ViewChild('DOTpress') pressDOT: ElementRef;
  @ViewChild('SLAUGHTpress') pressSLAUGHT: ElementRef;
  @HostListener('window:keydown', ['$event'])
  spaceDownEvent(event: KeyboardEvent) {
    if (event.key == 'q') {
      const element = this.pressQ.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/notec_Trim.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'w') {
      const element = this.pressW.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/noted_Trim.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'e') {
      const element = this.pressE.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/notee_Trim.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'r') {
      const element = this.pressR.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/notef_Trim.mp3';
      note.load();
      note.play();
    }
    if (event.key == 't') {
      const element = this.pressT.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/noteg_Trim.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'y') {
      const element = this.pressY.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/notea_Trim.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'u') {
      const element = this.pressU.nativeElement as HTMLButtonElement;
      element.classList.add('active');
      const note = new Audio();
      note.src = '../assets/noteb_Trim.mp3';
      note.load();
      note.play();
    }
    if (event.key == 'v') {
      const element = this.pressV.nativeElement as HTMLButtonElement;
      element.classList.add('active');
    }
    if (event.key == 'b') {
      const element = this.pressB.nativeElement as HTMLButtonElement;
      element.classList.add('active');
    }
    if (event.key == 'n') {
      const element = this.pressN.nativeElement as HTMLButtonElement;
      element.classList.add('active');
    }
    if (event.key == 'm') {
      const element = this.pressM.nativeElement as HTMLButtonElement;
      element.classList.add('active');
    }
    if (event.key == ',') {
      const element = this.pressCOMMA.nativeElement as HTMLButtonElement;
      element.classList.add('active');
    }
    if (event.key == '.') {
      const element = this.pressDOT.nativeElement as HTMLButtonElement;
      element.classList.add('active');
    }
    if (event.key == '/') {
      const element = this.pressSLAUGHT.nativeElement as HTMLButtonElement;
      element.classList.add('active');
    }
  }

  @HostListener('window:keyup', ['$event'])
  spaceUpEvent(event: KeyboardEvent) {
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
    if (event.key == 'v') {
      const element = this.pressV.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'b') {
      const element = this.pressB.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'n') {
      const element = this.pressN.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == 'm') {
      const element = this.pressM.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == ',') {
      const element = this.pressCOMMA.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '.') {
      const element = this.pressDOT.nativeElement as HTMLButtonElement;
      element.classList.remove('active');
    }
    if (event.key == '/') {
      const element = this.pressSLAUGHT.nativeElement as HTMLButtonElement;
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
  pressQButton() {}
}
