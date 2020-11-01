import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FlopService } from "../flop-list/flop.service";

@Component({
  selector: "my-flop-details",
  templateUrl: "./flop-details.component.html",
  styleUrls: []
})
export class FlopDetailsComponent {
  flop;

  constructor(
    private flopService: FlopService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id: number = +params.get("id");
      this.flopService.getFlop(id).subscribe(flop => {
        this.flop = flop;
      });
    });
  }
}
