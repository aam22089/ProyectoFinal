import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonDatetime,
  IonTextarea,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonDatetime,
    IonTextarea,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    CommonModule,
    FormsModule
  ]
})
export class CalendarPage implements OnInit {

  selectedDate: string = '';
  noteText: string = '';
  loadedNote: string = '';

  constructor() { }

  ngOnInit() { }

  loadNote() {
    if (this.selectedDate) {
      const note = localStorage.getItem(`note-${this.selectedDate}`);
      this.loadedNote = note || '';
      this.noteText = note || '';
    }
  }

  saveNote() {
    if (this.selectedDate && this.noteText.trim()) {
      localStorage.setItem(`note-${this.selectedDate}`, this.noteText);
      this.loadedNote = this.noteText;
    }
  }
}
