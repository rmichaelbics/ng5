import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CdkTableModule} from '@angular/cdk/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule ({
    imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSlideToggleModule,
        MatSelectModule, MatInputModule, MatNativeDateModule, MatSliderModule, MatPaginatorModule,
        MatSortModule, CdkTableModule, MatTableModule, MatCardModule, MatGridListModule],
    exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSlideToggleModule,
         MatSelectModule, MatInputModule, MatNativeDateModule, MatSliderModule,
         MatPaginatorModule, MatSortModule, CdkTableModule, MatTableModule, MatCardModule, MatGridListModule]
})

export class MaterialModule { }
