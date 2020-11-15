import { Component, OnInit } from '@angular/core';
import {GoogleAnalyticsService} from "../google-analytics.service";
import {fromEvent, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-windfall',
  templateUrl: './windfall.component.html',
  styleUrls: ['./windfall.component.css']
})
export class WindfallComponent implements OnInit {

  constructor(public googleAnalyticsService: GoogleAnalyticsService) { }
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  event: any;

  ngOnInit(): void {
    let map = $('#map');
    const windComp = this;
    let mapWidth = document.getElementById('addPage').getBoundingClientRect().width * 0.8;
    map.width(mapWidth);
    map.height(mapWidth * 0.6 );

    map.usmap({
      stateStyles: {fill: 'rgb(211, 161, 50)',stroke: 'white'},
      stateHoverStyles: {fill: 'rgb(52, 152, 219)'},
      stateHoverAnimation: 1,
      showLabels: false,
      click: function(event, data) {
        console.log('outbound');
        windComp.handleOutboundLinkClicks();
        window.location.href = "https://tracking.medicareplan.com/aff_c?offer_id=251&aff_id=1684&source=google&aff_sub={trafficsource.id}&aff_sub2={clickid}&aff_sub4={device}&aff_sub5={onhours}&source=google";
      }
    });

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      let map = $('#map');

      let mapWidth = document.getElementById('addPage').getBoundingClientRect().width * 0.8;
      map.width(mapWidth);
      map.height(mapWidth * 0.6 );
      map.children("svg").css({width: mapWidth, height: mapWidth * 0.9});



    })


  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }


  handleOutboundLinkClicks() {
    console.log('FIring');
    this.googleAnalyticsService.eventEmitter(
      "generate_lead_windfall",
      "windfall",
      "outbound_click",
      "click",
      1
    );
  }

}
