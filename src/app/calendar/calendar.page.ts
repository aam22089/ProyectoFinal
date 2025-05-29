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
  IonCardContent, 
  IonList
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
    FormsModule,
    IonList
  ]
})
export class CalendarPage implements OnInit {

  selectedDate: string = '';
  noteText: string = '';
  loadedNote: string = '';
  daysWithNotes: string[] = [];

  constructor() { }

  ngOnInit() {
    this.loadDaysWithNotes();
  }

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
      this.loadDaysWithNotes();
    }
  }

  loadDaysWithNotes() {
    this.daysWithNotes = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('note-')) {
        const dateStr = key.replace('note-', '');
        const note = localStorage.getItem(key);
        if (note && note.trim()) {
          this.daysWithNotes.push(dateStr);
        }
      }
    }
  }
}
