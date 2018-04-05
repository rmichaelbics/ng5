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

// import {MatPaginator, MatTableDataSource} from '@angular/material';

@NgModule ({
    imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSlideToggleModule,
        MatSelectModule, MatInputModule, MatNativeDateModule, MatSliderModule],
    exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSlideToggleModule,
         MatSelectModule, MatInputModule, MatNativeDateModule, MatSliderModule]
})

export class MaterialModule { }
