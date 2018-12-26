import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService:EventService) {

  }

  resolve() {
    console.log("resolver");
    return this.eventService.getEvents()
  }
}