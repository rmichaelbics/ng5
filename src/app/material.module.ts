import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule ({
    imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule,
        MatSelectModule, MatInputModule],
    exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule,
         MatSelectModule, MatInputModule]
})

export class MaterialModule { }
