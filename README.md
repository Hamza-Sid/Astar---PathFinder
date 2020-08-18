# Astar-PathFinder
About:
A*: This algorithm finds the shortest path between two points using heuristics (in this case, calculated estimates of the distance from start and end) and tries many possible directions until it reaches the end using only the shortest path

This implementation: This visualization uses a grid (2d array), and generates obstacles randomly. This visualization shows specifically how to reach from the top-left corner of the grid to the bottom-right. It uses a "neighbor" system that determines where to go next. The algorithm checks all of the adjacent nodes (neighbors), calculates their distances from the start as well as their distances from the end, and chooses to visit whichever node has the smallest value for its distances. It then repeats the process recursively until reaching the end, or running out of open spaces. This implementation uses a version of processing code called p5.js. The obstacles can be arranged in such a way that there is no solution, just refresh.

Demo: https://editor.p5js.org/Hamza_sid/present/Z3gAIRtSf
