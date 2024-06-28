class InMemorySearch {
  constructor() {
    this.data = new Map();
  }
  addDocuments(index, ...value) {
    if (this.data.has(index)) {
      this.data.set(index, [...this.data.get(index), ...value]);
    } else {
      this.data.set(index, [...value]);
    }
  }
  search(key, fn, obj) {
    if (!this.data.has(key)) {
      return {};
    }
    let returnData = this.data.get(key);
    returnData = returnData.filter((e) => fn(e));
    returnData.sort(function (a, b) {
      if (obj.asc) {
        return a[obj.key] - b[obj.key];
      }
      return b[obj.key] - a[obj.key];
    });
    return returnData;
  }
}
const searchEngine = new InMemorySearch();
searchEngine.addDocuments(
  'Movies',
  { name: 'Avenger', rating: 8.5, year: 2017 },
  { name: 'Black Adam', rating: 8.7, year: 2022 },
  { name: 'Jhon Wick 4', rating: 8.2, year: 2023 },
  { name: 'Black Panther', rating: 9.0, year: 2022 }
);
console.log(searchEngine.search('Movies', (e) => e.rating > 8.5, { key: 'rating', asc: false }));

/*
[
  {
    "name": "Black Panther",
    "rating": 9,
    "year": 2022
  },
  {
    "name": "Black Adam",
    "rating": 8.7,
    "year": 2022
  }
]
*/
