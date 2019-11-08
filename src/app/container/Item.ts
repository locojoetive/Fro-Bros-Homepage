export class FroBrosContent {
  title: string;
  paragraphs: string[];
  imageUrls: string[];

  constructor(title: string, content: string) {
    this.title = title;
    this.paragraphs = [];
    content.split(/(?:\r\n|\r|\n)/g).forEach(
      paragraph => {
        this.addParagraph(paragraph);
      });
    console.log(this.title, this.paragraphs.length);
  }

  addParagraph(paragraph: string) {
    this.paragraphs = [...this.paragraphs, paragraph];
  }

  addImageUrl(imageUrl: string) {
    this.imageUrls = [...this.imageUrls, imageUrl];
  }
}

export class Item {
  title: string;
  imageUrl: string;
  subItems: Item[] = [];
  content: FroBrosContent;
  routerLink: string;

  constructor(title: string, imageUrl: string, routerLink = '') {
    this.title = title;
    this.imageUrl = imageUrl;
    this.routerLink = routerLink;
    this.subItems = [];
  }

  addSubItems(items: Item[]): void {
    this.subItems = [...this.subItems, ...items];
  }
}

