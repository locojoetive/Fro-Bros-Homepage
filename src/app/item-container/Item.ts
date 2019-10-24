export class Item {
  title: string;
  imageUrl: string;
  htmlElement: HTMLElement;
  subItems: Item[];

  constructor(title: string, imageUrl: string) {
    this.title = title;
    this.imageUrl = imageUrl;
  }

  addSubItems(items: Item[]): void {
    this.subItems = [...this.subItems, ...items];
  }

  subitems(): Item[] {
    return this.subItems;
  }
}
/*{
  title:  'About Games',
    imageUrl: 'assets/images/Banner-0.png',
  subItems: [
  {
    title: 'Paper Fighter',
    subItems: [],
    imageUrl: 'assets/images/Sub-Banner-0-0.jpg'
  },
  {
    title: 'Wrath of the Ninja',
    subItems: [],
    imageUrl: 'assets/images/Sub-Banner-0-1.jpg'
  },
  {
    title: 'Wait a Minute Mr. Postman',
    subItems: [],
    imageUrl: 'assets/images/Sub-Banner-0-2.jpg'
  },
  {
    title: 'Beware of the Psyder',
    subItems: [],
    imageUrl: 'assets/images/Sub-Banner-0-3.jpg'
  },
],
},
{
  title:  'About Us',
    subItems: [
  {
    title: 'Henk the Tank',
    subItems: [],
    imageUrl: 'assets/images/Sub-Banner-1-0.png'
  },
  {
    title: 'Locojoetive',
    subItems: [],
    imageUrl: 'assets/images/Sub-Banner-1-1.png'
  },
],
  imageUrl: 'assets/images/Banner-1.png'
},
{
  title:  'Blog',
    subItems: [],
  imageUrl: 'assets/images/Banner-2.png'
}
 */
