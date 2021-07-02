import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './components/delete/delete.component';
import { ErrorsModule } from './components/errors/errors.module';
import { MakeControlNamePipe } from './components/errors/pipes/make-control-name.pipe';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { RatingComponent } from './components/rating/rating.component';
import { CustomMaterialModule } from './material.module';
import { SharedRoutingModule } from './shared-routing.module';
@NgModule({
  declarations: [
    RatingComponent,
    ImageUploadComponent,
    MakeControlNamePipe,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CustomMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ErrorsModule,
  ],
  exports: [
    RatingComponent,
    ImageUploadComponent,
    CustomMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ErrorsModule,
    MakeControlNamePipe,
    DeleteComponent
  ],
  providers: [
    MakeControlNamePipe
  ]
})
export class SharedModule { }
