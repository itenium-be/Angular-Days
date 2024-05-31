import { Injectable } from "@angular/core";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  private readonly default_title = "Toe-tally Amazing";

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState)
    if (!title) {
      this.title.setTitle(this.default_title);
    } else {
      this.title.setTitle(`${title} | ${this.default_title}`);
    }
  }
}
