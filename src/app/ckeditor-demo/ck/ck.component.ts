import { Component, OnInit } from '@angular/core';
import * as CustomEditor from "../../../assets/ck/build/ckeditor";

@Component({
  selector: 'app-ck',
  templateUrl: './ck.component.html',
  styleUrls: ['./ck.component.scss']
})
export class CkComponent implements OnInit {

  constructor() { }
  data="";

  public Editor = CustomEditor;

  ngOnInit(): void {
  }

}
