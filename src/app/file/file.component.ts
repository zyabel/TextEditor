import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  textDefault = '';

  selectedText: string = '';

  constructor(private textService: TextService) {
  }

  ngOnInit() {
    this.textService.getMockText().then((result) => this.textDefault = result);
  }

  showSelectedText(oField) {
    let text = '';
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != 'Control') {
      text = document.selection.createRange().text;
    }
    this.selectedText = text;
  }

  formatDocument(type) {
    //method for text formatting
  }
}
