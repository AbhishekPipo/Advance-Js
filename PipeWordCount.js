const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dolor congue, iaculis dui auctor, facilisis sapien. Sed auctor sed sem et placerat. Duis egestas vestibulum nulla sed pellentesque. Mauris vestibulum orci at porttitor suscipit. Mauris eleifend gravida eros eget vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tempor bibendum felis sed consequat. Mauris maximus erat a justo euismod, consequat lacinia urna malesuada. Sed sit amet lobortis magna, vel congue massa. Sed rhoncus, sem id elementum convallis, nisi metus blandit ex, eget ultricies ex ante laoreet mi. Maecenas ut venenatis elit. Quisque tempor quis orci nec rhoncus. Phasellus id libero quis urna scelerisque commodo.";

const splitOnSpace = (string) => string.split(" ");
const count = (array) => array.length;

const wordCount = pipe(splitOnSpace, count);
console.log(wordCount(lorem));
const egbdf = "Every good boy does fine.";
console.log(wordCount(egbdf));



const pal1 = "taco cat";
const pal2 = "UFO tofu";
const pal3 = "Dave";

const split = (string) => string.split(''); 

const join = (string) => string.join('');

const lower = (string) => string.toLowerCase(); 
 const reverse = (array) => array.reverse();



const fwd = pipe (
splitOnSpace,
join,
lower
);
const rev = pipe (
fwd, // a nested pipe function
split,
reverse,
join
);


console.log(fwd(pal1)=== rev(pal1))
console.log(fwd(pal2)=== rev(pal2))
console.log(fwd(pal3)=== rev(pal3))









