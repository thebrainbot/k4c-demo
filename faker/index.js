const faker = require('faker');
const fs = require('fs');

/**
 * Generates a mock of a user for blog posts.
 * 
 * @returns User mock data object
 */
const generatePersonData = () => {
  return {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dob: faker.date.between('1960-01-01', '1910-01-01'),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    legalGender: faker.name.gender(),
    city: faker.address.city(),
    state: faker.address.state(),
  }
}

/**
 * Generates a given number of users.
 * 
 * @param {number} count Number of people to generate
 */
const generatePeople = (count) => {
  const authors = [];
  for(let i = 0; i < count; i++) {
    const person = generatePersonData();
    authors.push(person);
  }
  return authors;
}

/**
 * Generates a post
 * 
 * @param {number} id Post id
 * @param {number} authorID Authors id
 * @returns generated post
 */
const generatePostData = (id, authorID) => {
  const paragraphCount = faker.datatype.number({min: 2, max: 8});

  return {
    id,
    postDate: faker.date.recent(30),
    title: faker.company.catchPhrase(),
    slug: faker.lorem.slug(),
    content: faker.lorem.paragraphs(paragraphCount),
    authorID,
  }
}

/**
 * Generates a number of blog posts. Each post is 'linked' to a
 * user via id.
 * 
 * @param {number} postCount Number of posts to generate
 * @param {Array<Object>} people List of generated people
 */
const postGenerator = (postCount, people) => {
  const posts = [];
  for (let i = 0; i < postCount; i++) {
    const randomPerson = Math.floor(Math.random() * (people.length - 1));
    const { id: authorId } = people[randomPerson];
    posts.push(generatePostData(i, authorId));
  }
  return posts;
}

/**
 * Writes the data to a local file.
 * 
 * @param {Array<Object>} people List of people
 * @param {Array<Object>} posts List of posts
 */
const writeData = (people, posts) => {
  fs.writeFileSync(
    "./db.json",
    JSON.stringify({people, posts})
  );
}

const init = () => {
  const userCount = faker.datatype.number({min: 8, max: 20});
  const postCount = faker.datatype.number({min: 15, max:50});
  console.log(`Generating ${userCount} users`)
  console.log(`Generating ${postCount} posts`)
  const people = generatePeople(userCount);
  const posts = postGenerator(postCount, people);

  writeData(people, posts);
}

init();