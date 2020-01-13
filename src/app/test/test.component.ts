import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>Inline template</div>
  <p>Multiple lines of html</p>`,
  styles: [`
    p {
      color: blue;
    }

    div {
      color: pink;
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
