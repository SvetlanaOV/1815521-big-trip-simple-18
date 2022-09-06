import {
  getRandomInt, getRandomArrayElement
} from '../utils/common.js';

const DESTINATION_DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Fusce tristique felis at fermentum pharetra.',
  'In rutrum ac purus sit amet tempus.'
];

export const DESTINATION_NAME = [
  'Tokio', 'London', 'Paris'
];

const DESTINATION_COUNT = 10;

const generatePicture = () => {
  const generatePictures = () => `http://picsum.photos/300/200?r=${getRandomInt(1, 15)}`;

  return {
    src: generatePictures(),
    description: 'Chamonix parliament building'
  };
};

const generatePictureArray = () => Array.from({
  length: 3,
}, (_, k) => generatePicture(k + 1));


export const generateEventDestination = (id) => ({
  id: id,
  description: getRandomArrayElement(DESTINATION_DESCRIPTION),
  name: getRandomArrayElement(DESTINATION_NAME),
  pictures: generatePictureArray(),
});

const generateDestinationArray = () => Array.from({
  length: DESTINATION_COUNT,
}, (_, k) => generateEventDestination(k + 1));


const destinationArray = generateDestinationArray();

export const getRandomDestination = () => getRandomArrayElement(destinationArray);

export const getDestination = (id) => destinationArray.filter((element) => element.id === id)[0];
