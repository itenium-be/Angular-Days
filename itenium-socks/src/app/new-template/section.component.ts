import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `
<section class="shop_section" style="margin-bottom: 26px">
  <div class="container">
    <div class="heading_container heading_center">
      <h2 style="text-transform: none">
        {{ title }}
      </h2>
    </div>
    <div class="row">
      <div class="col-12" style="text-align: center;">
        <ng-content />
      </div>
    </div>
  </div>
</section>
<hr>
`})
export class SectionComponent {
  @Input() title = '';
}
