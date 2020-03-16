import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AnotherCustomAvatarComponent } from './another-custom-avatar/another-custom-avatar.component';
import { UnwrapDirective } from './unwrap.directive';
import { Unwrap2Directive } from './unwrap2.directive';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page, AnotherCustomAvatarComponent, UnwrapDirective, Unwrap2Directive]
})
export class Tab3PageModule {}
