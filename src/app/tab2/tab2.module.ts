import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CustomAvatarComponent } from './custom-avatar/custom-avatar.component';
import { UnwrapDirective } from './unwrap.directive';
import { Unwrap2Directive } from './unwrap2.directive';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page, CustomAvatarComponent, UnwrapDirective, Unwrap2Directive]
})
export class Tab2PageModule {}
