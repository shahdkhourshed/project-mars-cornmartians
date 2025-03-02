// simulation.jsx
import React, { Component } from "react";
import Sketch from "react-p5";

export default class Simulation extends Component {
  gridSize = 5;
  tileSize = 100;
  grid = [];
  currentAction = "plant"; // Available actions: plant, water, harvest
  crops = [];

  setup = (p5, parent) => {
    console.log("gold");
    p5.createCanvas(this.gridSize * this.tileSize, this.gridSize * this.tileSize).parent(parent);

    // Initialize the grid with empty tiles
    for (let i = 0; i < this.gridSize; i++) {
      let row = [];
      for (let j = 0; j < this.gridSize; j++) {
        row.push(null);  // No crop in this tile initially
      }
      this.grid.push(row);
    }

    // Define different crop types
    this.crops = {
      carrot: {
        stages: 3, // Number of growth stages (0: seed, 1: growing, 2: mature)
        growthRate: 0.01, // Rate at which the plant grows per frame
        color: p5.color(255, 165, 0) // Carrot's color when mature
      }
    };
  }

  draw = (p5) => {
    p5.background(200);

    // Draw the grid and crops
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        // Draw each tile
        p5.stroke(0);
        p5.fill(255);
        p5.rect(i * this.tileSize, j * this.tileSize, this.tileSize, this.tileSize);

        // Draw the crop if there is one
        let crop = this.grid[i][j];
        if (crop) {
          p5.fill(crop.growthStage === 2 ? crop.type.color : p5.color(0, 255, 0)); // Full growth or growing plant
          p5.ellipse(i * this.tileSize + this.tileSize / 2, j * this.tileSize + this.tileSize / 2, this.tileSize / 2, this.tileSize / 2);

          // Grow the plant if it's not fully grown
          if (crop.growthStage < 2) {
            crop.growthProgress += crop.type.growthRate;
            if (crop.growthProgress >= 1) {
              crop.growthStage++;
              crop.growthProgress = 0;
            }
          }
        }
      }
    }

    // Display current action
    p5.fill(0);
    p5.noStroke();
    p5.textSize(16);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.text(`Action: ${this.currentAction}`, p5.width / 2, p5.height - 20);
  }

  // Handle mouse clicks to interact with the grid
  mousePressed = (p5) => {
    let i = Math.floor(p5.mouseX / this.tileSize);
    let j = Math.floor(p5.mouseY / this.tileSize);

    if (i >= 0 && i < this.gridSize && j >= 0 && j < this.gridSize) {
      let crop = this.grid[i][j];
      if (this.currentAction === "plant" && !crop) {
        // Plant a seed
        this.grid[i][j] = {
          type: this.crops.carrot,
          growthStage: 0, // Start as a seed
          growthProgress: 0 // Initial growth progress
        };
      } else if (this.currentAction === "water" && crop && crop.growthStage < 2) {
        // Water the plant (accelerates growth)
        crop.growthProgress += 0.5; // Water speeds up growth
      } else if (this.currentAction === "harvest" && crop && crop.growthStage === 2) {
        // Harvest the crop (only if fully grown)
        this.grid[i][j] = null;
      }
    }
  };

  // Switch between actions using the keyboard
  keyPressed = (p5) => {
    if (p5.key === '1') {
      this.currentAction = "plant";
    } else if (p5.key === '2') {
      this.currentAction = "water";
    } else if (p5.key === '3') {
      this.currentAction = "harvest";
    }
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} 
    mousePressed={this.mousePressed} keyPressed={this.keyPressed} />;
  };
}
