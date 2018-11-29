import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';


interface Synonym {
  word: string;
  score: number;
  tags: string[];
}

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  textDefault: string = '';

  selectedText: string = '';

  synonyms: Synonym;

  isShow: boolean = false;

  constructor(private textService: TextService) {}

  ngOnInit(): void {
    this.textService.getMockText().then((result) => this.textDefault = result);
  }

  // method for getting the value of selected part of a text
  getSelectedText(event): void {
    let text = '';

    if (window.getSelection) {
      text = window.getSelection().toString();

    // check for selected word
    if (text.length) {
      this.isShow = true;
      this.textService.getSynonyms(text)
        .subscribe((data: Synonym) => {
          this.synonyms = data;
      })
    }
    this.selectedText = text;
  }

  // method for text formatting
  formatDocument(type): void {
    document.execCommand(type, false);
    this.isShow = false;
  }

  // method gets the value of synonym and replace the selected word in the text
  getSelectedSynonym(synonym): void {
    if (synonym.length)
      document.execCommand('insertText', false, synonym);
      this.isShow = false;
  }
}
