import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./header/header.module').then((mod) => mod.HeaderModule),
      },
    ],
  },
  {
    path: 'ckeditor',
    loadChildren: () =>
      import('./ckeditor-demo/ckeditor-demo.module').then(
        (mod) => mod.CkeditorDemoModule
      ),
  },
  {
    path: 'quill',
    loadChildren: () =>
      import('./quill-demo/quill-demo.module').then(
        (mod) => mod.QuillDemoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
