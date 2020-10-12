import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { BlockHeaderComponent } from './block-header/block-header.component';
import { BlockContentComponent } from './block-content/block-content.component';
import { CommonUiModule } from 'common-ui';

@NgModule({
  imports: [CommonModule, CommonUiModule],
  declarations: [
    MainContentComponent,
    BlockHeaderComponent,
    BlockContentComponent
  ],
  exports: [MainContentComponent]
})
export class MainContentModule {}
