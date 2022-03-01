import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuillDemoRoutingModule } from './quill-demo-routing.module';
import { QuillComponent } from './quill/quill.component';

import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuillComponent],
  imports: [CommonModule, QuillDemoRoutingModule,QuillModule , FormsModule],
})
export class QuillDemoModule {}
