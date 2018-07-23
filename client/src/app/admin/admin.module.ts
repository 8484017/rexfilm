import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { IndexPageAdminComponent } from './pages/index-page-admin/index-page-admin.component';
import { ParserPageAdminComponent } from './pages/parser-page-admin/parser-page-admin.component';
import { RouterModule } from '@angular/router';
import { LoggerComponent } from './components/logger/logger.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "", component: AdminLayoutComponent, children: [
          { path: "", component: IndexPageAdminComponent },
          { path: "parser", component: ParserPageAdminComponent }
        ]
      }
    ])
  ],
  declarations: [AdminLayoutComponent, IndexPageAdminComponent, ParserPageAdminComponent, LoggerComponent]
})
export class AdminModule { }
