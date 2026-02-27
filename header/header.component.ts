import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule ,Router} from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(public auth:AuthService,private router:Router){}
}
