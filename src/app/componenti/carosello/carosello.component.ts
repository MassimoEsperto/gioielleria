import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.scss']
})
export class CaroselloComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchProduct() {
    this.router.navigate(['/product'])
  }
}
