import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.pra1();
    this.work1();
  }

  work1() {
    const courseLists = [{
      'name': 'My Courses',
      'courses': [{
        'id': 511019,
        'title': 'React for Beginners',
        'covers': [{
          width: 150,
          height: 200,
          url: 'http://placeimg.com/150/200/tech'
        }, {
          width: 200,
          height: 200,
          url: 'http://placeimg.com/200/200/tech'
        }, {
          width: 300,
          height: 200,
          url: 'http://placeimg.com/300/200/tech'
        }],
        'tags': [{
          id: 1,
          name: 'JavaScript'
        }],
        'rating': 5
      }, {
        'id': 511020,
        'title': 'Front-End automat workflow',
        'covers': [{
          width: 150,
          height: 200,
          url: 'http://placeimg.com/150/200/arch'
        }, {
          width: 200,
          height: 200,
          url: 'http://placeimg.com/200/200/arch'
        }, {
          width: 300,
          height: 200,
          url: 'http://placeimg.com/300/200/arch'
        }],
        'tags': [{
          'id': 2,
          'name': 'gulp'
        }, {
          'id': 3,
          'name': 'webpack'
        }],
        'rating': 5
      }]
    }, {
      'name': 'New Release',
      'courses': [{
        'id': 511022,
        'title': 'Vue2 for Beginners',
        'covers': [{
          width: 150,
          height: 200,
          url: 'http://placeimg.com/150/200/nature'
        }, {
          width: 200,
          height: 200,
          url: 'http://placeimg.com/200/200/nature'
        }, {
          width: 300,
          height: 200,
          url: 'http://placeimg.com/300/200/nature'
        }],
        'tags': [{
          id: 1,
          name: 'JavaScript'
        }],
        'rating': 5
      }, {
        'id': 511023,
        'title': 'Angular2 for Beginners',
        'covers': [{
          width: 150,
          height: 200,
          url: 'http://placeimg.com/150/200/people'
        }, {
          width: 200,
          height: 200,
          url: 'http://placeimg.com/200/200/people'
        }, {
          width: 300,
          height: 200,
          url: 'http://placeimg.com/300/200/people'
        }],
        'tags': [{
          id: 1,
          name: 'JavaScript'
        }],
        'rating': 5
      }]
    }];
    const result = [];
    courseLists.forEach(x => {
      return x.courses.map(y => {
        const k = { id: y.id, title: y.title, cover: y.covers.filter(z => z.width === 150 && z.height === 200)[0] };
        result.push(k);
        return k;
      });
    });
    console.log(result);
  }

  pra1() {
    console.log('pra1');
    const newCourseList = [
      {
        'id': 511021,
        'title': 'React for Beginners',
        'coverPng': 'https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png',
        'rating': 5
      },
      {
        'id': 511022,
        'title': 'Vue2 for Beginners',
        'coverPng': 'https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png',
        'rating': 5
      },
      {
        'id': 511023,
        'title': 'Angular2 for Beginners',
        'coverPng': 'https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png',
        'rating': 5
      },
      {
        'id': 511024,
        'title': 'Webpack for Beginners',
        'coverPng': 'https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png',
        'rating': 4
      }
    ];
    // , idAndTitle = [];

    // A
    // newCourseList.forEach((course) => {
    //   idAndTitle.push({ id: course.id, title: course.title });
    // });

    // B
    const idAndTitle = newCourseList
      .map((course) => {
        return { id: course.id, title: course.title };
      });

    // C
    // const ratingIsFive = [];
    // newCourseList.forEach((course) => {
    //   if (course.rating === 5) {
    //     ratingIsFive.push(course);
    //   }
    // });

    // D
    // const ratingIsFive = newCourseList
    //   .filter((course) => course.rating === 5);

    // E
    // const ratingIsFive = newCourseList
    //   .filter((course) => course.rating === 5)
    //   .map(course => course.title);
  }
}
