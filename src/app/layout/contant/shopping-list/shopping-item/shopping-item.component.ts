import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss'],
})
export class ShoppingItemComponent implements OnInit {
  shoppingItemForm = new FormGroup({
    itemName: new FormControl('', Validators.required),
    itemAmount: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}
}
