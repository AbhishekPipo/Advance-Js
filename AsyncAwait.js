const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initApp = async () => {
  getPostsSerialized(ids);
};

document.addEventListener("DOMContentLoaded", initApp);

const getPost = async (id) => {
  return await (
    await fetch("https://jsonplaceholder.typicode.com/posts/${id}")
  ).json();
};

// const useForEach = (ids) => {
//   ids.forEach(async (id) => {
//     const data = await getPost(id);
//     console.log(data);
//   });

//   console.log(" i am not waiting");
// };

const getPostsSerialized = async (ids) => {
  // for (let i = 0; i < ids.length; i++) {
  // const data = await getPost(ids[i]);
  // console.log(data);

  // }

  //   for (const id of ids) {
  //     const data = await getPost(id);
  //     console.log(data);
  //   }
  //   console.log("I'll wait on you");

  await ids.reduce(async (acc, id) => {
    await acc;

    const post = await getPost(id);
    console.log(post);
  }, Promise.resolve());
  console.log("I'll wait on you");
};

const getPostsConcurrently = async (ids) => {
  const posts = await Promise.allSettled(ids.map(async (id) => getPost(id)));
  console.log(posts);
  console.log("I'll wait on you");
};
