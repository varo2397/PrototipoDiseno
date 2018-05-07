import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]
})

export class MaterialModule{

}
