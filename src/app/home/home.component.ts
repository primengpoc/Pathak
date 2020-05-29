import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onUpload(event) {
    let input = event.files;
    let reader: FileReader = new FileReader();
    reader.readAsText(input[0]);
    reader.onload = (e) => {
      let csv: string = reader.result as string;
      alert(csv);
      console.log(csv);
    }
  }

}
