import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  work: string = "";
  works: string[] = [];
  updateWork: string = "";
  isUpdateFormActive: boolean = false;
  index: number = 0;


  save() {
    this.works.push(this.work)
    this.work = "";
  }

  remove(index: number) {
    let result: boolean = confirm("Silmek istediğinden emin misin")
    if (result) {
      this.works.splice(index, 1)
    }
  }

  get(work: string, index: number) {
    this.updateWork = work
    this.index = index
    this.isUpdateFormActive = true;
  }

  update() {
    this.works[this.index] = this.updateWork
    this.cancel()
  }

  cancel() {
    this.isUpdateFormActive = false;
  }

  changeInputClass(){
    if (this.work.length < 5) {
      return "is-invalid"
    }
    return "is-valid"
  }

}
