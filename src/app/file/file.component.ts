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

  synonyms: {};

  constructor(private textService: TextService) {}

  ngOnInit() {
    this.textService.getMockText().then((result) => this.textDefault = result);
  }

  showSelectedText(oField) {
    let text = '';
    if (window.getSelection) {
      text = window.getSelection().toString();

      // check for selected word
      if (text.length) {
        this.textService.getSynonyms(text)
          .subscribe(data => {
            this.synonyms = data;
        })
      }
    } else if (document.selection && document.selection.type != 'Control') {
      text = document.selection.createRange().text;
    }
    this.selectedText = text;
  }

  formatDocument(type) {
    document.execCommand(type, false);
  }

  getSynonymValue(synonym) {
    document.execCommand('insertText', false, synonym)
  }
}
