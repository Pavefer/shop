function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// https://static.insales-cdn.com/r/b-f1OLkPPcQ/rs:fit:500:0:1/q:100/plain/images/products/1/243/543301875/4035_0.jpg@webp
export const data = {
  items: {
    drawing: {
        name: 'Рисование',
        items: new Array(25)
    .fill(1)
    .map(() => ({
        isNew: true,
        imageURL:
          'https://static.insales-cdn.com/r/b-f1OLkPPcQ/rs:fit:500:0:1/q:100/plain/images/products/1/243/543301875/4035_0.jpg@webp',
        name: 'Кисть Hatber щетина круглая № 10',
        price: getRandomInt(40, 500),
        rating: 4.2,
        numReviews: 34,
      })),
    },
    'mechanical-drawing': {
        name: 'Черчение',
        items: new Array(25)
    .fill(1)
    .map(() => ({
        isNew: true,
        imageURL:
          'https://static.insales-cdn.com/r/FG5rhJCc5RY/rs:fit:1000:0:1/q:100/plain/images/products/1/4957/543306589/41031_0.jpg@webp',
        name: 'Набор для черчения Глобус Junior 7 предметов',
        price: getRandomInt(40, 500),
        rating: 4.2,
        numReviews: 34,
      })),
    },
    covers: {
        name: 'Обложки',
        items: new Array(25)
    .fill(1)
    .map(() => ({
        isNew: true,
        imageURL:
          'https://static.insales-cdn.com/r/ZJqGL4D18Z8/rs:fit:500:0:1/q:100/plain/images/products/1/821/543302453/6868_0.jpg@webp',
        name: 'Обложка для дневников и тетрадей прозрачная 21 х 35 см',
        price: getRandomInt(40, 500),
        rating: 4.2,
        numReviews: 34,
      })),
    },
    'office-stationery': {
        name: 'Офисная канцелярия',
        items: new Array(25)
    .fill(1)
    .map(() => ({
        isNew: true,
        imageURL:
          'https://static.insales-cdn.com/r/PpfXh4WLyFY/rs:fit:1000:0:1/q:100/plain/images/products/1/2967/543304599/30207_0.jpg@webp',
        name: 'Скобы №10 БРАУБЕРГ 1000 шт. (220949)',
        price: getRandomInt(40, 500),
        rating: 4.2,
        numReviews: 34,
      })),
    },
    'school-items': {
        name: 'Товары для школы',
        items: new Array(25)
    .fill(1)
    .map(() => ({
        isNew: true,
        imageURL:
          'https://static.insales-cdn.com/r/MWAAK-0C4Go/rs:fit:500:0:1/q:100/plain/images/products/1/5025/543314849/1112739_0.jpg@webp',
        name: 'Рюкзак школьный 2 отделения 3 кармана ДЕВЕНТЕ Премьер Дрифт 37*28*18 см (7033248)',
        price: getRandomInt(40, 2000),
        rating: 4.2,
        numReviews: 34,
      })),
    },
  },
};
