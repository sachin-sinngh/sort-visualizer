function print(value, index) {
  const rect = document.createElement('div');
  rect.classList.add('rect');
  rect.style.height = value + '%';
  rect.style.left = index + 1 + '%';
  rect.id = index;
  document.getElementById('container').appendChild(rect);
}

function sleep(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

const arr = [];

function fill() {
  for (let i = 1; i < 98; i++) {
    arr.push(i);
    print(i, i);
  }
  reset();
}

function reset() {
  let i;
  let j = 0;

  // randomize
  while (j < arr.length) {
    i = Math.floor(Math.random() * arr.length);
    swap(i, j);
    j++;
  }
}

async function swap(i, j, delay = 0) {
  const rect1 = document.getElementById(i);
  const rect2 = document.getElementById(j);

  // swap
  [rect1.style.left, rect2.style.left] = [rect2.style.left, rect1.style.left];
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // change color
  rect1.style.backgroundColor = 'red';
  rect2.style.backgroundColor = 'red';

  // wait
  await sleep(delay);

  // reset color
  rect1.style.backgroundColor = 'white';
  rect2.style.backgroundColor = 'white';
}

// sort
async function selectionSort() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        await swap(i, j, 10);
      }
    }
  }
}

// sort
async function bubbleSort() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await swap(j, j + 1, 10);
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fill();
});
