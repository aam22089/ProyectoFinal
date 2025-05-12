import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, deleteDoc, doc, collectionData } from '@angular/fire/firestore'
import { from, Observable } from 'rxjs';

export interface Event {
  id?: string;
  title: string;
  type: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CalendarioService {

  private eventCollection = collection(this.firestore, 'event');

  constructor(private firestore: Firestore) { }

  getEvents(): Observable<Event[]> {
    return collectionData(this.eventCollection, { idField: 'id' }) as Observable<Event[]>;
  }

  addEvent(event: Event) {
    return addDoc(this.eventCollection, event)
  }

  updateEvent(id: string, data: Partial<Event>) {
    const taskDoc = doc(this.firestore, `event/${id}`);
    return updateDoc(taskDoc, data);
  }

  deleteEvent(id: string) {
    const taskDoc = doc(this.firestore, `event/${id}`);
    return deleteDoc(taskDoc);
  }
}
