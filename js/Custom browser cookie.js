// not completed

let document = {
  myCookie,
};
document.myCookie = 'name=prashant; max-age=1';
document.myCookie = 'blog-learnersbucket';
console.log(document.myCookie);
setTimeout(() => {
  console.log(document.myCookie);
}, 1500);
