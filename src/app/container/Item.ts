export class Item {
  title: string;
  imageUrl: string;
  itemHtmlElement: HTMLElement;
  subItems: Item[] = [];
  content: string;
  routerLink: string;

  constructor(title: string, imageUrl: string, routerLink = '') {
    this.title = title;
    this.imageUrl = imageUrl;
    this.routerLink = routerLink;
    this.subItems = [];
  }

  addSubItems(items: Item[]): void {
    this.subItems = [...this.subItems, ...items];
    this.subItems.forEach(item => {
      console.log(item);
    });
  }
}

