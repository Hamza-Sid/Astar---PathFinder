# Astar-PathFinder
Authors: Hamza Siddiqui

About:
A*: This algorithm finds the shortest path between two points using heuristics (in this case, calculated estimates of the distance from start and end) and tries many possible directions until it reaches the end using only the shortest path

This implementation:
This visualization uses a 2d array and randomly generated obstacles to display the shortest path from the top-left to the bottom-right of the screen. It uses a "neighbor" system that chooses to visit the most efficicent ones based on distance from the start and end. It then repeats the process recursively until reaching the end, or running out of open spaces. This implementation uses a version of processing code called p5.js. The obstacles can be arranged in such a way that there is no solution, just refresh.

Demo: https://editor.p5js.org/Hamza_sid/present/Z3gAIRtSf
