import { Component, Input } from "@angular/core";

@Component({
  selector: "result",
  templateUrl: "./result.component.html",
  styleUrls: [],
})
export class ResultComponent {
  @Input() resultIdentical: boolean;
}
