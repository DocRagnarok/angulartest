import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { testobject } from './testget';
@Component({
  selector: 'app-pianoapp',
  templateUrl: './pianoapp.component.html',
  styleUrls: ['./pianoapp.component.css'],
})
export class PianoappComponent implements OnInit {
  constructor(private http: HttpClient) {}
  testlist: testobject[] = [];
  ngOnInit(): void {
    this.http
      .get<testobject[]>('https://www.anapioficeandfire.com/api/books')
      .subscribe((Response) => {
        this.testlist = Response;
      });
  }
}
