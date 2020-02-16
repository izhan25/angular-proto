import { Component, OnInit } from '@angular/core';

const _categories = [
  {
    title: 'Mobile',
    link: '/mobile',
    subCats: [
      {
        title: 'Samsung',
        link: '/mobile/samsung'
      }
    ]
  },
  {
    title: 'Bikes',
    link: '/bikes',
    subCats: [
      {
        title: 'Unique',
        link: '/bikes/unique',
        subCats: [
          {
            title: '2019',
            link: '/bike/unique/2019'
          },
          {
            title: '2020',
            link: '/bike/unique/2020'
          }
        ]
      }
    ]
  },
]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories = _categories;

  constructor() { }

  ngOnInit(): void {
  }

}
