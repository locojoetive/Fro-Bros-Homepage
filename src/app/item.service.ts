import {Injectable} from '@angular/core';
import {HeaderItem} from './container/header-container/header-item/HeaderItem';
import {FroBrosContent, Item} from './container/Item';
import {TextContentService} from './text-content.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  static headerItems: HeaderItem[];
  static items: Item[];

  constructor(private contentService: TextContentService) {
    if (!ItemService.items) {
      ItemService.items = [
        new Item('About Games', 'assets/images/Banner-0.png', '/home/games'),
        new Item('About Us', 'assets/images/Banner-1.png', '/home/people'),
        new Item('Blog', 'assets/images/Banner-2.png', '/home/blog'),
      ];

      ItemService.items[0].addSubItems([
        new Item('Paper Fighter', 'assets/images/Sub-Banner-0-0.png'),
        new Item('Wrath of the Ninja', 'assets/images/Sub-Banner-0-1.png'),
        new Item('Wait a Minute Mr. Postman', 'assets/images/Sub-Banner-0-2.png'),
        new Item('Beware of the Psyder', 'assets/images/Sub-Banner-0-3.png'),
      ]);
      ItemService.items[1].addSubItems([
        new Item('Locojoetive', 'assets/images/Sub-Banner-1-1.png'),
        new Item('Herrnock', 'assets/images/Sub-Banner-1-0.png'),
      ]);

      this.contentService.readBlogEntries().subscribe(blogEntry => {
        const item = new Item('some-date', 'some/background/url');
        item.content = this.formatToFroBrosContent('some title', blogEntry);
        ItemService.items[2].addSubItems([item]);
        console.log('too late?', item);
      });

      // initialize text content for sub items
      ItemService.items.forEach(item => {
        if (item.subItems.length > 0) {
          item.subItems.map(subItem => {
            const title = subItem.title.replace(/\s/g, '');
            this.contentService.readContentFor(title).subscribe(text => {
              subItem.content = this.formatToFroBrosContent(subItem.title, text);
            });
          });
        }
      });
    }

    if (!ItemService.headerItems) {
      ItemService.headerItems = [
        new HeaderItem('About Games', '/home/games'),
        new HeaderItem('About Us', '/home/people'),
        new HeaderItem('', '/home'),
        new HeaderItem('Blog', '/home/blog'),
        new HeaderItem('Contact Us', '/home'),
      ];
    }
  }

  public static mainItems(): Item[] {
    return ItemService.items;
  }

  public static mainHeaderItems(): HeaderItem[] {
    return ItemService.headerItems;
  }

  public static games(): Item {
    return ItemService.items[0];
  }

  public static people(): Item {
    return ItemService.items[1];
  }

  public static blogEntries() {
    return ItemService.items[2];
  }

  private formatToFroBrosContent(title: string, text: string): FroBrosContent {
    return new FroBrosContent(title, text);
  }
}
