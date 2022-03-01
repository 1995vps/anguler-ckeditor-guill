import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CkeditorDemoRoutingModule } from './ckeditor-demo-routing.module';
import { CkComponent } from './ck/ck.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CkComponent],
  imports: [
    CommonModule,
    CkeditorDemoRoutingModule,
    CKEditorModule,
    FormsModule,
  ],
})
export class CkeditorDemoModule {}
