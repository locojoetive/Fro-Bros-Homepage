export class HeaderItem {
  title: string;
  relatedHtmlElement: HTMLElement;

  constructor(title: string) {
    this.title = title;
  }

  setRelatedHtmlElement(relatedHtmlElement: HTMLElement): void {
    this.relatedHtmlElement = relatedHtmlElement;
  }
}
