import React, { Component } from "react";
import Sketch from "react-p5";
import backgroundImage from "./red_mars_sand.webp";
import lettuceEmoji from "./lettuce.webp";
import onionEmoji from "./onion.webp";
import cornEmoji from "./corn.webp";
import carrotEmoji from "./carrot.webp";
import sweetPotatoEmoji from "./sweetpotato.webp";
import roverImage from "./rover_right.webp";

export default class Simulation extends Component {
  gridSize = 5;
  tileSize = 100;
  grid = [];
  currentAction = "plant";
  selectedCrop = "carrot";
  crops = {};
  images = {};
  backgroundImg = null;
  health_bar = 100;
  plants_harvested = { carrot: 0, corn: 0, lettuce: 0, onion: 0, sweetPotato: 0 };
  water = 0;
  
  // Rover Properties
  roverSize = 200;
  roverSpeed = 1.5;
  roverX = -80;
  roverY = (this.gridSize * this.tileSize) / 2 - this.roverSize / 2;
  roverMoving = false;

  setup = (p5, parent) => {
    p5.createCanvas(this.gridSize * this.tileSize, this.gridSize * this.tileSize).parent(parent);
    this.backgroundImg = p5.loadImage(backgroundImage);

    this.images = {
      carrot: p5.loadImage(carrotEmoji),
      corn: p5.loadImage(cornEmoji),
      lettuce: p5.loadImage(lettuceEmoji),
      onion: p5.loadImage(onionEmoji),
      sweetPotato: p5.loadImage(sweetPotatoEmoji),
      rover: p5.loadImage(roverImage),
    };

    for (let i = 0; i < this.gridSize; i++) {
      let row = [];
      for (let j = 0; j < this.gridSize; j++) {
        row.push(null);
      }
      this.grid.push(row);
    }
  };

  draw = (p5) => {
    if (this.backgroundImg) {
      p5.image(this.backgroundImg, 0, 0, p5.width, p5.height);
    } else {
      p5.background(200);
    }

    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        p5.stroke(0);
        p5.noFill();
        p5.rect(i * this.tileSize, j * this.tileSize, this.tileSize, this.tileSize);

        let crop = this.grid[i][j];
        if (crop) {
          if (p5.millis() - crop.timePlanted > 5500) {
            p5.fill(0);
            p5.rect(i * this.tileSize, j * this.tileSize, this.tileSize, this.tileSize);
          } else {
            if (crop.growthStage < 2) {
              crop.growthProgress += 0.01;
              if (crop.growthProgress >= 1) {
                crop.growthStage++;
                crop.growthProgress = 0;
              }
            }

            let cropImage = this.images[crop.type];
            if (cropImage) {
              let size = this.tileSize * (0.4 + 0.3 * crop.growthStage);
              p5.image(
                cropImage,
                i * this.tileSize + (this.tileSize - size) / 2,
                j * this.tileSize + (this.tileSize - size) / 2,
                size,
                size
              );
            } else {
              p5.fill(crop.growthStage === 2 ? 255 : 165, crop.growthStage === 2 ? 165 : 0, 0);
              p5.ellipse(i * this.tileSize + this.tileSize / 2, j * this.tileSize + this.tileSize / 2, this.tileSize / 2);
            }
          }
        }
      }
    }

    // Draw Rover if it's moving
    if (this.roverMoving) {
      p5.image(this.images.rover, this.roverX, this.roverY, this.roverSize, this.roverSize * 0.6);
    }

    p5.fill(0);
    p5.noStroke();
    p5.textSize(16);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.text(`Action: ${this.currentAction}`, p5.width / 2, p5.height - 20);
    p5.text(`Water: ${this.water} gallons`, p5.width / 2, p5.height - 40);
  };

  mousePressed = (p5) => {
    let i = Math.floor(p5.mouseX / this.tileSize);
    let j = Math.floor(p5.mouseY / this.tileSize);

    if (i >= 0 && i < this.gridSize && j >= 0 && j < this.gridSize) {
      let crop = this.grid[i][j];
      if (this.currentAction === "plant" && !crop) {
        this.grid[i][j] = {
          type: this.selectedCrop,
          growthStage: 0,
          growthProgress: 0,
          timePlanted: p5.millis(),
        };
      } else if (this.currentAction === "harvest" && crop && crop.growthStage === 2) {
        this.health_bar += this.getHealthBoost(crop.type);
        this.plants_harvested[crop.type]++;
        this.grid[i][j] = null;
      } else if (this.currentAction === "water" && crop && crop.growthStage < 2) {
        crop.growthStage++;
      }
    }
  };

  getHealthBoost = (cropType) => {
    const healthValues = { carrot: 2, corn: 0, onion: 3, sweetPotato: 2, lettuce: 3 };
    return healthValues[cropType] || 0;
  };

  fetchWater = () => {
    if (this.roverMoving) return;

    this.roverX = -this.roverSize;
    this.roverY = (this.gridSize * this.tileSize) / 2 - this.roverSize / 2;
    this.roverMoving = true;

    const moveRover = () => {
      if (this.roverX < this.gridSize * this.tileSize) {
        this.roverX += this.roverSpeed;
        requestAnimationFrame(moveRover);
      } else {
        this.roverMoving = false;
        this.water += 5;
      }
    };

    moveRover();
  };

  keyPressed = (p5) => {
    if (p5.key === "1") {
      this.currentAction = "plant";
    } else if (p5.key === "2") {
      this.currentAction = "water";
    } else if (p5.key === "3") {
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
        <div className="flex gap-4 mt-4">
          <button onClick={() => this.selectCrop("carrot")}><img src={carrotEmoji} alt="Carrot" width="50" /></button>
          <button onClick={() => this.selectCrop("corn")}><img src={cornEmoji} alt="Corn" width="50" /></button>
          <button onClick={() => this.selectCrop("lettuce")}><img src={lettuceEmoji} alt="Lettuce" width="50" /></button>
          <button onClick={() => this.selectCrop("onion")}><img src={onionEmoji} alt="Onion" width="50" /></button>
          <button onClick={() => this.selectCrop("sweetPotato")}><img src={sweetPotatoEmoji} alt="Sweet Potato" width="50" /></button>
        </div>
        <button onClick={this.fetchWater} className="mt-4 p-2 bg-blue-500 text-white rounded">Fetch Water</button>
      </div>
    );
  }
}
