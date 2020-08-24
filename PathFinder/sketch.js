
 function refresh() {
  location.reload();
}
function heuristic(a, b) {
  var d = dist(a.i, a.j, b.i, b.j);
  return d;
}
function removeFromArray(arr, item) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == item) {
      arr.splice(i, 1);
    }
  }
}
var inp;
var rows = 30;
var cols = 30;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var path = [];
var start;
var end;
var w, h;
var entered = false;
function Spot(i, j) {
  this.i = i;
  this.j = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.neighbors = [];
  this.previous = undefined;
  this.wall = false;
  if (random(1) < 0.2) {
    this.wall = true;
  }
  this.show = function(col) {
    fill(col);
    if (this.wall) {
      fill(100);
    }
    // noStroke();
    stroke(0);
    rect(this.i * w, this.j * h, w, h);
  }

  this.addNeighbors = function(grid) {
    var i = this.i;
    var j = this.j;

    if (i < cols - 1) {
      this.neighbors.push(grid[i + 1][j]);
    }
    if (i > 0) {
      this.neighbors.push(grid[i - 1][j]);
    }
    if (j < rows - 1) {
      this.neighbors.push(grid[i][j + 1]);
    }
    if (j > 0) {
      this.neighbors.push(grid[i][j - 1]);
    }
    //upleft
    if (i > 0 && j > 0) {
      this.neighbors.push(grid[i - 1][j - 1]);
    }
    //upright
    if (i < cols - 1 && j > 0) {
      this.neighbors.push(grid[i + 1][j - 1]);
    }
    //downleft
    if (i > 0 && j < rows - 1) {
      this.neighbors.push(grid[i - 1][j + 1]);
    }
    //downright
    if (i < cols - 1 && j < 0) {
      this.neighbors.push(grid[i + 1][j + 1]);
    }
  }
}

function setup() {
  createCanvas(600, 600);
  console.log('A*');
  // rows = document.getElementById().value();
  console.log(rows);
  w = width / cols;
  h = height / rows;
  //making an x, y (cols, row) 2d array
  for (var i = 0; i < cols; i++) {
    grid[i] = new Array(rows);
  }
  //making each cell in the grid an object
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].addNeighbors(grid);
    }
  }

  start = grid[0][0];
  end = grid[cols - 1][rows - 1];
  start.wall = false;
  end.wall = false;
  openSet.push(start);

  console.log(grid);
}

function draw() {
  if (openSet.length > 0) {
    openSet.sort(function(a, b){return a.f - b.f});
    var current = openSet[0];
    if (current === end) {
      noLoop();
      console.log('Complete');
    }

    removeFromArray(openSet, current);
    closedSet.push(current);

    var neighbors = current.neighbors;
    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
      if (!closedSet.includes(neighbor) && !neighbor.wall) {
        var temp = current.g + 1 // heuristic(neighbor, current);
        var newPath = false;
        if (openSet.includes(neighbor)) {
          if (temp < neighbor.g) {
            neighbor.g = temp;
            newPath = true;
          }
        } else {
          neighbor.g = temp;
          newPath = true;
          openSet.push(neighbor);
        }
        if(newPath){
          neighbor.h = heuristic(neighbor, end);
          neighbor.f = neighbor.g + neighbor.h;
          neighbor.previous = current;
        }
      }

    }

  } else {
    console.log('no solution');
    noLoop();
    return;
  }
  background(0);

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show(color(255));
    }
  }

  for (var i = 0; i < closedSet.length; i++) {
    closedSet[i].show(color(255, 0, 0));
  }

  path = [];
  var temp = current;
  path.push(temp);
  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;

  }
  for (var i = 0; i < path.length; i++) {
    path[i].show(0, 0, 255);
  }
}