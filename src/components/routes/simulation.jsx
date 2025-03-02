import React, { Component } from "react";
import Sketch from "react-p5";
import backgroundImage from "./red_mars_sand.webp"; // Ensure this path is correct
import lettuceEmoji from "./lettuce.webp";
import onionEmoji from "./onion.webp";
import cornEmoji from "./corn.webp";
import carrotEmoji from "./carrot.webp";
import sweetPotatoEmoji from "./sweetpotato.webp";

export default class Simulation extends Component {
  gridSize = 5;
  tileSize = 100;
  grid = [];
  currentAction = "plant"; // Available actions: plant, water, harvest
  selectedCrop = "carrot"; // Default selected crop
  crops = {};
  images = {}; // Store crop images
  backgroundImg = null;

  setup = (p5, parent) => {
    console.log("gold");
    p5.createCanvas(this.gridSize * this.tileSize, this.gridSize * this.tileSize).parent(parent);

    // Load background image
    this.backgroundImg = p5.loadImage(backgroundImage);

    // Load crop images
    this.images = {
      carrot: p5.loadImage(carrotEmoji),
      corn: p5.loadImage(cornEmoji),
      lettuce: p5.loadImage(lettuceEmoji),
      onion: p5.loadImage(onionEmoji),
      sweetPotato: p5.loadImage(sweetPotatoEmoji),
    };

    // Initialize the grid with empty tiles
    for (let i = 0; i < this.gridSize; i++) {
      let row = [];
      for (let j = 0; j < this.gridSize; j++) {
        row.push(null);  // No crop in this tile initially
      }
      this.grid.push(row);
    }
  };

  draw = (p5) => {
    // Draw background image
    if (this.backgroundImg) {
      p5.image(this.backgroundImg, 0, 0, p5.width, p5.height);
    } else {
      p5.background(200);
    }

    // Draw the grid and crops
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        // Draw each tile (grid lines)
        p5.stroke(0);
        p5.noFill();
        p5.rect(i * this.tileSize, j * this.tileSize, this.tileSize, this.tileSize);

        let crop = this.grid[i][j];
        if (crop) {
          // Grow the crop over time
          if (crop.growthStage < 2) {
            crop.growthProgress += 0.01; // Increment growth progress
            if (crop.growthProgress >= 1) {
              crop.growthStage++;
              crop.growthProgress = 0;
            }
          }

          // Draw crop image based on growth stage
          let cropImage = this.images[crop.type];
          if (cropImage) {
            let size = this.tileSize * (0.4 + 0.3 * crop.growthStage); // Scale size based on growth
            p5.image(cropImage, i * this.tileSize + (this.tileSize - size) / 2, j * this.tileSize + (this.tileSize - size) / 2, size, size);
          } else {
            // Placeholder orange dot for crop growth
            p5.fill(crop.growthStage === 2 ? 255 : 165, crop.growthStage === 2 ? 165 : 0, 0);
            p5.ellipse(i * this.tileSize + this.tileSize / 2, j * this.tileSize + this.tileSize / 2, this.tileSize / 2);
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
  };

  mousePressed = (p5) => {
    let i = Math.floor(p5.mouseX / this.tileSize);
    let j = Math.floor(p5.mouseY / this.tileSize);

    if (i >= 0 && i < this.gridSize && j >= 0 && j < this.gridSize) {
      let crop = this.grid[i][j];
      if (this.currentAction === "plant" && !crop) {
        // Plant the selected crop with initial growth state
        this.grid[i][j] = {
          type: this.selectedCrop,
          growthStage: 0, // Start as a seed
          growthProgress: 0 // Initial growth progress
        };
      } else if (this.currentAction === "harvest" && crop && crop.growthStage === 2) {
        // Harvest only if the crop is fully grown
        this.grid[i][j] = null;
      }
    }
  };

  keyPressed = (p5) => {
    if (p5.key === '1') {
      this.currentAction = "plant";
    } else if (p5.key === '3') {
      this.currentAction = "harvest";
    }
  };

  selectCrop = (crop) => {
    this.selectedCrop = crop;
  };

  render() {
    return (
      <div className="flex flex-col items-center">
        <Sketch setup={this.setup} draw={this.draw} mousePressed={this.mousePressed} keyPressed={this.keyPressed} />

        {/* Crop Selection Buttons */}
        <div className="flex gap-4 mt-4">
          <button onClick={() => this.selectCrop("carrot")}><img src={carrotEmoji} alt="Carrot" width="50" /></button>
          <button onClick={() => this.selectCrop("corn")}><img src={cornEmoji} alt="Corn" width="50" /></button>
          <button onClick={() => this.selectCrop("lettuce")}><img src={lettuceEmoji} alt="Lettuce" width="50" /></button>
          <button onClick={() => this.selectCrop("onion")}><img src={onionEmoji} alt="Onion" width="50" /></button>
          <button onClick={() => this.selectCrop("sweetPotato")}><img src={sweetPotatoEmoji} alt="Sweet Potato" width="50" /></button>
        </div>
      </div>
    );
  }
}
