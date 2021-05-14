import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { RatingComponent } from './components/rating/rating.component';
import { StarComponent } from './components/star/star.component';
import { CustomMaterialModule } from './material.module';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { SplitOnCapitalLetterPipe } from './pipes/split-on-capital-letter.pipe';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    ReplacePipe,
    RatingComponent,
    StarComponent,
    ImageUploadComponent,
    SplitOnCapitalLetterPipe,
    CapitalizeFirstLetterPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CustomMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // ErrorsModule
  ],
  exports: [
    ReplacePipe,
    RatingComponent,
    StarComponent,
    ImageUploadComponent,
    CustomMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // ErrorsModule,
    SplitOnCapitalLetterPipe,
    CapitalizeFirstLetterPipe
  ],
  providers: [
    SplitOnCapitalLetterPipe,
    CapitalizeFirstLetterPipe
  ]
})
export class SharedModule { }
