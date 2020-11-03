import React, { Component } from "react";
import * as d3 from "d3";
// importing data
import DogsDatabaseCSV from "../data/Dogs-Database.csv";
import FlightsDatabaseCSV from "../data/Flights-Database.csv";
// Importing dog images
import Albina from "../dogPictures/Albina.jpg";
import BarsorChaika from "../dogPictures/Bars-or-Chaika.jpg";
import Belka from "../dogPictures/Belka.jpg";
import Belyanka from "../dogPictures/Belyanka.jpg";
import Bulba from "../dogPictures/Bulba.jpg";
import Chernuskha from "../dogPictures/Chernuskha.jpg";
import Chizhik from "../dogPictures/Chizhik.jpg";
import Damka2 from "../dogPictures/Damka-2.jpg";
import Damka from "../dogPictures/Damka.jpg";
import Dezik from "../dogPictures/Dezik.jpg";
import Dzhoyna from "../dogPictures/Dzhoyna.jpg";
import Knopka from "../dogPictures/Knopka.jpg";
import Kometka from "../dogPictures/Kometka.jpg";
import Kozyavka from "../dogPictures/Kozyavka.jpg";
import KusachkaorOtavazhnaya from "../dogPictures/Kusachka-or-Otvazhnaya.jpg";
import Laika from "../dogPictures/Laika.jpg";
import Linda from "../dogPictures/Linda.jpg";
import Lisa2 from "../dogPictures/Lisa-2.jpg";
import Lisa from "../dogPictures/Lisa.jpg";
import Lisichka from "../dogPictures/Lisichka.jpg";
import Malyok from "../dogPictures/Malyok.jpg";
import Malyshka from "../dogPictures/Malyshka.jpg";
import Mishika from "../dogPictures/Mishika.jpg";
import Mishka2 from "../dogPictures/Mishka-2.jpg";
import Modnitsa from "../dogPictures/Modnitsa.jpg";
import Mushka from "../dogPictures/Mushka.jpg";
import Neputeviy from "../dogPictures/Neputeviy.jpg";
import Neva from "../dogPictures/Neva.jpg";
import Palma2 from "../dogPictures/Palma-2.jpg";
import Palma from "../dogPictures/Palma.jpg";
import Pchyolka from "../dogPictures/Pchyolka.jpg";
import Pestraya from "../dogPictures/Pestraya.jpg";
import Pushok from "../dogPictures/Pushok.jpg";
import Rita from "../dogPictures/Rita.jpg";
import Ryzhaya from "../dogPictures/Ryzhaya.jpg";
import Ryzhik2 from "../dogPictures/Ryzhik-2.jpg";
import Ryzhik3 from "../dogPictures/Ryzhik-3.jpg";
import Ryzhik from "../dogPictures/Ryzhik.jpg";
import Shutka from "../dogPictures/Shutka.jpg";
import Smeliy from "../dogPictures/Smeliy.jpg";
import SnezhinkaorZhemchuzhnaya from "../dogPictures/Snezhinka-or-Zhemchuzhnaya.jpg";
import Strelka from "../dogPictures/Strelka.jpg";
import Tsygan from "../dogPictures/Tsygan.jpg";
import UgolyokorSnezhok from "../dogPictures/Ugolyok-or-Snezhok.jpg";
import VeterokorBzdunok from "../dogPictures/Veterok-or-Bzdunok.jpg";
import Zhulba from "../dogPictures/Zhulba.jpg";
import ZIB from "../dogPictures/ZIB.jpg";
import Zvezdochka from "../dogPictures/Zvezdochka.jpg";

class Dogs extends Component {
  // Setting up the global variables
  doggoData;
  flightsData;
  radiusScale;
  pawScale;
  pawOffset;
  defaulPawScale = 0.002;
  defaulPawOffset = 12;
  infoTabIsOpen = false;
  currentOpenInfoTab = undefined;
  infoTabXPosition;
  infoTabXPositionafterTransition;
  imageMap = {
    Albina: Albina,
    "Bars-or-Chaika": BarsorChaika,
    Belka: Belka,
    Belyanka: Belyanka,
    Bulba: Bulba,
    Chernuskha: Chernuskha,
    Chizhik: Chizhik,
    "Damka-2": Damka2,
    Damka: Damka,
    Dezik: Dezik,
    Dzhoyna: Dzhoyna,
    Knopka: Knopka,
    Kometka: Kometka,
    Kozyavka: Kozyavka,
    "Kusachka-or-Otavazhnaya": KusachkaorOtavazhnaya,
    Laika: Laika,
    Linda: Linda,
    "Lisa-2": Lisa2,
    Lisa: Lisa,
    Lisichka: Lisichka,
    Malyok: Malyok,
    Malyshka: Malyshka,
    Mishika: Mishika,
    "Mishka-2": Mishka2,
    Modnitsa: Modnitsa,
    Mushka: Mushka,
    Neputeviy: Neputeviy,
    Neva: Neva,
    "Palma-2": Palma2,
    Palma: Palma,
    Pchyolka: Pchyolka,
    Pestraya: Pestraya,
    Pushok: Pushok,
    Rita: Rita,
    Ryzhaya: Ryzhaya,
    "Ryzhik-2": Ryzhik2,
    "Ryzhik-3": Ryzhik3,
    Ryzhik: Ryzhik,
    Shutka: Shutka,
    Smeliy: Smeliy,
    "Snezhinka-or-Zhemchuzhnaya": SnezhinkaorZhemchuzhnaya,
    Strelka: Strelka,
    Tsygan: Tsygan,
    "Ugolyok-or-Snezhok": UgolyokorSnezhok,
    "Veterok-or-Bzdunok": VeterokorBzdunok,
    Zhulba: Zhulba,
    ZIB: ZIB,
    Zvezdochka: Zvezdochka,
  };
  position2D = [
    [1110, 380], // Repeated because Dezik was not being read
    [1110, 380], //1
    [1170, 510], //2
    [1250, 330], //3
    [910, 1330], //4
    [1000, 1400], //5
    [420, 350], //6
    [380, 230], //7
    [700, 80], //8
    [550, 100], //9
    [750, 610], //10
    [760, 450], //11
    [800, 300], //12
    [620, 350], //13
    [890, 680], //14
    [350, 1120], //15
    [480, 1160], //16
    [900, 500], //17
    [530, 1330], //18
    [430, 1280], //19
    [200, 410], //20
    [230, 550], //21
    [200, 680], //22
    [460, 690], //23
    [340, 730], //24
    [210, 830], //25
    [230, 970], //26
    [220, 1300], //27
    [1080, 890], //28
    [1150, 1000], //29
    [750, 1050], //30
    [750, 1170], //31
    [580, 820], //32
    [500, 930], //33
    [620, 1250], //34
    [800, 930], //35
    [870, 1150], //36
    [1000, 110], //37
    [1200, 100], //38
    [320, 880], //39
    [900, 1030], //40
    [1400, 1130], //41
    [1260, 1200], //42
    [1100, 1250], //43
    [1400, 710], //44
    [1200, 1350], //45
    [1210, 750], //46
    [800, 1410], //47
    [670, 1450], //48
  ];

  // Setting up global functions
  addColorGradientDefs;
  drawText;
  drawPaw;
  drawConnectionLines;
  displayInfoTab;
  circlesExitTrasitions;
  circleEnterTransitions;
  drawLegend;
  drawDogCircles;
  drawTitle;

  // execute when the DOM loads
  componentDidMount() {
    // Getting the data
    Promise.all([d3.csv(DogsDatabaseCSV), d3.csv(FlightsDatabaseCSV)]).then(
      (values) => {
        // Assigning data to the variables
        [this.doggoData, this.flightsData] = values;

        // Modifying the dogs data so that they have their x and y positions
        for (let i = 0; i < this.doggoData.length; i++) {
          this.doggoData[i].x = this.position2D[i][0];
          this.doggoData[i].y = this.position2D[i][1];
        }

        // Defining a scale domain extent variable
        const scalingExtents = d3.extent(
          this.doggoData,
          (d) => d.Flights.split(",").length
        );
        // Defining radius scale
        this.radiusScale = d3
          .scaleLinear()
          .domain(scalingExtents)
          .range([25, 50])
          .clamp(true);

        // Defining paw scale
        this.pawScale = d3
          .scaleLinear()
          .domain(scalingExtents)
          .range([0.002, 0.006])
          .clamp(true);

        // Defining paw offset
        this.pawOffset = d3
          .scaleLinear()
          .domain(scalingExtents)
          .range([17, 50])
          .clamp(true);

        // Drawing the title
        this.drawTitle();
        // Drawing lines connecting the dogs
        this.drawConnectionLines();
        // Drawing the Circles representing dogs
        this.drawDogCircles();
        // Adding color gradients
        this.addColorGradientDefs();
      }
    );
  }

  // Defining the color gradients
  addColorGradientDefs = () => {
    // Removing existing gradient defs if any
    d3.selectAll("#gradient-defs").remove();

    const colorData_on_death = [
      { offset: "0%", color: "#fafafa" },
      { offset: "20%", color: "#fbf3fd" },
      { offset: "100%", color: "#d88ae8" },
    ];
    const colorData_on_survival = [
      { offset: "0%", color: "#fafafa" },
      { offset: "20%", color: "#fefcea" },
      { offset: "100%", color: "#f1da36" },
    ];
    const colorData_default = [
      { offset: "0%", color: "#ffffff" },
      { offset: "100%", color: "#fafafa" },
    ];

    const defs = d3
      .select("#dogs")
      .select("svg")
      .append("defs")
      .attr("id", "gradient-defs");

    // Defs for survival
    defs
      .append("radialGradient")
      .attr("id", "color-gradient-survived")
      .selectAll("stop")
      .data(colorData_on_survival)
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color);

    // Defs for death
    defs
      .append("radialGradient")
      .attr("id", "color-gradient-died")
      .selectAll("stop")
      .data(colorData_on_death)
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color);

    // Default Defs
    defs
      .append("radialGradient")
      .attr("id", "color-gradient-default")
      .selectAll("stop")
      .data(colorData_default)
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color);
  };

  drawText = (dogID, xpos, ypos, fateOfDog) => {
    const textXPos = xpos - 25;
    const textYPos = ypos - 20;

    d3.select(`#${dogID}`)
      .append("text")
      .style("pointer-events", "none")
      .style("text-anchor", "end")
      .style("font-weight", 100)
      .style("opacity", 0.8)
      .style("fill", fateOfDog === "Died" ? "#d88ae8" : "#f1da36")
      .attr("x", textXPos)
      .attr("y", textYPos)
      .text(dogID.replace("or", "/").replaceAll("-", " "));
  };

  drawPaw = (dogID, xpos, ypos) => {
    const paw = d3
      .select(`#${dogID}`)
      .append("g")
      .attr(
        "transform",
        `translate(${-this.defaulPawOffset + xpos}, ${
          this.defaulPawOffset + ypos
        }) scale(${this.defaulPawScale}, ${-this.defaulPawScale}) rotate(0)`
      )
      .style("pointer-events", "none")
      .attr("opacity", 0.8)
      .attr("fill", "black")
      .attr("stroke", "none");
    paw
      .append("path")
      .attr(
        "d",
        "M8425 12296 c-714 -172 -1276 -774 -1548 -1656 -128 -415 -184 -930 -142 -1305 82 -741 432 -1322 951 -1583 176 -88 352 -134 520 -134 134 0 252 24 387 78 814 327 1377 1162 1499 2224 21 187 16 551 -11 770 -40 326 -87 500 -196 725 -171 353 -411 614 -705 764 -178 92 -325 130 -525 137 -113 3 -143 1 -230 -20z"
      );

    paw
      .append("path")
      .attr(
        "d",
        "M3822 12255 c-408 -74 -780 -384 -1006 -839 -212 -426 -270 -1025 -160 -1654 140 -802 549 -1478 1131 -1868 128 -86 340 -191 484 -239 102 -34 128 -38 241 -43 150 -6 257 8 388 50 203 65 369 167 525 323 309 309 501 774 546 1323 18 226 -2 562 -51 825 -175 952 -690 1700 -1380 2003 -269 118 -506 157 -718 119z"
      );

    paw
      .append("path")
      .attr(
        "d",
        "M11403 8606 c-661 -109 -1244 -566 -1604 -1260 -171 -329 -261 -613 -326 -1026 -23 -149 -27 -205 -27 -375 0 -208 12 -311 55 -479 115 -451 386 -818 723 -981 184 -89 352 -122 541 -105 459 40 868 247 1232 623 401 415 677 989 767 1592 23 151 39 446 32 567 -37 623 -371 1169 -836 1369 -180 77 -378 104 -557 75z"
      );

    paw
      .append("path")
      .attr(
        "d",
        "M1051 8344 c-435 -73 -801 -377 -936 -779 -48 -142 -88 -345 -105 -530 -62 -671 173 -1424 618 -1985 98 -123 291 -317 414 -413 284 -225 627 -386 947 -447 85 -16 286 -14 367 4 359 78 662 328 834 689 106 222 160 505 160 838 0 205 -10 317 -46 507 -137 732 -582 1417 -1182 1820 -164 111 -397 229 -524 266 -159 46 -380 58 -547 30z"
      );

    paw
      .append("path")
      .attr(
        "d",
        "M6240 5905 c-348 -39 -692 -132 -1031 -281 -518 -229 -1018 -610 -1341 -1024 -697 -894 -1181 -1862 -1378 -2755 -12 -55 -33 -138 -46 -185 -67 -243 -56 -519 31 -760 140 -388 443 -689 818 -815 224 -75 559 -74 932 4 243 50 425 108 941 299 718 267 917 318 1400 363 216 20 255 21 404 10 381 -27 682 -110 1260 -346 512 -209 798 -322 870 -342 720 -204 1435 47 1680 590 107 239 119 628 29 997 -88 359 -349 942 -599 1335 -704 1108 -1211 1729 -1790 2197 -549 442 -1005 650 -1571 713 -159 18 -447 18 -609 0z"
      );
  };

  drawConnectionLines = () => {
    const dogsSvg = d3
      .select("#dogs")
      .select("svg")
      .append("g")
      .attr("id", "dog-lines");

    const dogsSet = new Set();

    // Iterate through flights data and draw a line between dogs that flew together
    this.flightsData.forEach((data) => {
      let dogs = data.Dogs.split(",");

      if (dogs.length >= 2) {
        let dog1Name = dogs[0].replaceAll(" ", "-");
        let dog2Name = dogs[1].replaceAll(" ", "-");

        if (!dogsSet.has(`${dog1Name}-${dog2Name}`)) {
          let dog1 = this.doggoData.find((d) => d["Name (Latin)"] === dogs[0]);
          let dog2 = this.doggoData.find((d) => d["Name (Latin)"] === dogs[1]);

          dogsSvg
            .append("path")
            .style("pointer-events", "none")
            .attr("id", `${dog1Name}-${dog2Name}-line`)
            .attr(
              "d",
              d3.line()([
                [dog1.x, dog1.y],
                [dog2.x, dog2.y],
              ])
            );
        }

        dogsSet.add(`${dog1Name}-${dog2Name}`);
      }
    });
  };

  displayInfoTab = (event, d) => {
    let mouse_x = d3.pointer(event)[0];
    const transitionDuration = 500;
    this.infoTabXPosition =
      mouse_x >= window.innerWidth - 500 ? d.x - 440 : d.x + 20;
    this.infoTabXPositionafterTransition =
      mouse_x >= window.innerWidth - 500 ? d.x - 500 : d.x + 100;
    // To remove and re add the info tab on continuous multiple clicks
    d3.selectAll("#info-tab").remove();
    const infotab = d3.select("#dogs").append("div").attr("id", "info-tab");

    infotab
      .style("left", this.infoTabXPosition + "px")
      .style("top", d.y - 50 + "px")
      .style("opacity", 0)
      .transition()
      .duration(transitionDuration)
      .style("left", this.infoTabXPositionafterTransition + "px")
      .style("opacity", 1);

    // Adding information to the infotab
    // Cleaning up the raw data
    let flightDates = d.Flights.split(",");
    let flightInfo = [];
    let rockets = new Set();
    let flightDataNotes = new Set();
    let maxAltitude = Number.MIN_VALUE;
    flightDates.forEach((date) =>
      flightInfo.push(this.flightsData.find((d) => d.Date === date))
    );
    flightInfo.forEach((flight) => {
      if (flight.Rocket !== "unknown") rockets.add(flight.Rocket);
      if (flight["Altitude (km)"] !== "unknown") {
        if (maxAltitude !== "orbital" || maxAltitude !== "was to be orbital") {
          if (flight["Altitude (km)"] === "orbital") maxAltitude = "orbital";
          else if (flight["Altitude (km)"] === "was to be orbital")
            maxAltitude = "was to be orbital";
          else maxAltitude = Math.max(maxAltitude, +flight["Altitude (km)"]);
        }
      }
      if (flight.Notes !== "") flightDataNotes.add(flight.Notes);
    });
    console.log(d["Name (Latin)"].replaceAll(" ", "-"));
    // Image
    infotab
      .append("img")
      .attr("src", this.imageMap[d["Name (Latin)"].replaceAll(" ", "-")])
      .attr(
        "alt",
        `A picture of ${d["Name (Latin)"]
          .replace("or", "/")
          .replaceAll(" ", "-")}`
      );

    // Names
    infotab.append("hr");
    infotab
      .append("text")
      .html(
        `Name in Latin: &nbsp&nbsp&nbsp<b>${d["Name (Latin)"].replace(
          "or",
          "/"
        )}</b>`
      );

    infotab
      .append("text")
      .html(`Name in English: &nbsp<b>${d["Name (English)"]}</b>`);
    infotab
      .append("text")
      .html(`Name in Cyrillic: <b>${d["Name (Cyrillic)"]}</b>`);
    // Gender
    infotab.append("hr");
    infotab.append("text").html(`Gender: <b>${d.Gender}</b>`);
    // Flights
    if (rockets.size > 0) {
      infotab.append("hr");
      infotab.append("text").text(`Flew in rockets:`);
      rockets.forEach((rocket) =>
        infotab
          .append("text")
          .style("padding-left", 150 + "px")
          .html(`<b>${rocket}</b>`)
      );
    }
    // Altitude
    if (maxAltitude !== Number.MIN_VALUE) {
      infotab.append("hr");
      infotab
        .append("text")
        .html(`Max altitude reached(in km): <b>${maxAltitude}</b>`);
    }
    // Fate of the Dog
    let fate = d.Fate.split(" ");
    infotab.append("hr");
    infotab
      .append("text")
      .html(
        fate.length < 2
          ? `Fate of ${d["Name (Latin)"]}: <b>${fate[0]}</b>`
          : `Fate of ${d["Name (Latin)"]}: <b>${fate[0]} on ${fate[1]}</b>`
      );
    // Notes
    if (d.Notes !== "" || flightDataNotes.size > 0) {
      infotab.append("hr");
      infotab.append("text").text("Additional info:");
    }
    if (d.Notes !== "") {
      infotab
        .append("text")
        .style("padding-left", 80 + "px")
        .html(`<b>=> ${d.Notes}</b>`);
    }
    if (flightDataNotes.size > 0) {
      flightDataNotes.forEach((note) => {
        infotab
          .append("text")
          .style("padding-left", 80 + "px")
          .html(`<b>=> ${note}</b>`);
      });
    }
  };

  circlesExitTrasitions = (svg, d) => {
    const transitionDuration = 500;
    const defaultRadius = 20;
    // Transition to change color of the circle
    svg
      .select(`#${d["Name (Latin)"].replaceAll(" ", "-")}`)
      .select("circle")
      .transition()
      .duration(transitionDuration)
      .attr("r", defaultRadius)
      .style("fill", "url(#color-gradient-default)");

    // Transitions to the paws
    d3.select(`#${d["Name (Latin)"].replaceAll(" ", "-")}`)
      .select("g")
      .transition()
      .duration(transitionDuration)
      .attr(
        "transform",
        `translate(${-this.defaulPawOffset + d.x}, ${
          this.defaulPawOffset + d.y
        }) scale(${this.defaulPawScale}, ${-this.defaulPawScale}) rotate(0)`
      );

    // Text transitions
    svg
      .selectAll(`#${d["Name (Latin)"].replaceAll(" ", "-")}`)
      .select("text")
      .transition()
      .duration(transitionDuration)
      .attr("x", d.x - 25)
      .attr("y", d.y - 20);

    d3.selectAll(`#${d["Name (Latin)"].replaceAll(" ", "-")}-english`)
      .transition()
      .duration(transitionDuration)
      .attr("x", d.x)
      .attr("y", d.y)
      .style("opacity", 0)
      .remove();

    d3.selectAll(`#${d["Name (Latin)"].replaceAll(" ", "-")}-cyrillic`)
      .transition()
      .duration(transitionDuration)
      .attr("x", d.x)
      .attr("y", d.y)
      .style("opacity", 0)
      .remove();
  };

  circleEnterTransitions = (dogsSvg, d) => {
    const fateOfDog = d.Fate.split(" ")[0];
    const transitionDuration = 500;

    // Creating a gradient based on if the dog survived or died during the flight
    const colorGradient =
      fateOfDog === "Survived"
        ? "url(#color-gradient-survived)"
        : "url(#color-gradient-died)";
    // Geting the number of flights the dog flew
    let numberOfFlights = d.Flights.split(",").length;

    const dogGroup = dogsSvg.select(
      `#${d["Name (Latin)"].replaceAll(" ", "-")}`
    );

    dogGroup
      .select("circle")
      .transition()
      .duration(transitionDuration)
      .attr("r", this.radiusScale(numberOfFlights))
      .style("fill", colorGradient);

    // Adding transitions to the paws
    d3.select(`#${d["Name (Latin)"].replaceAll(" ", "-")}`)
      .select("g")
      .transition()
      .duration(transitionDuration)
      .attr(
        "transform",
        `translate(${d.x}, ${
          d.y + this.pawOffset(numberOfFlights)
        }) scale(${this.pawScale(numberOfFlights)}, ${-this.pawScale(
          numberOfFlights
        )}) rotate(45)`
      );

    // Adding names in different langs
    dogGroup
      .select("text")
      .transition()
      .duration(transitionDuration)
      .attr("x", d.x - 60)
      .attr("y", d.y - 60);

    const dogGroupText = dogGroup.append("g");

    // Adding English name
    dogGroupText
      .append("text")
      .attr("id", `${d["Name (Latin)"].replaceAll(" ", "-")}-english`)
      .style("pointer-events", "none")
      .style("text-anchor", "end")
      .style("font-weight", 100)
      .style("opacity", 0)
      .style("fill", fateOfDog === "Died" ? "#d88ae8" : "#f1da36")
      .attr("x", d.x)
      .attr("y", d.y)
      .transition()
      .duration(transitionDuration)
      .attr("x", d.x - 60)
      .attr("y", d.y - 40)
      .style("opacity", 0.8)
      .text(d["Name (English)"]);

    // Adding Cyrillic name
    dogGroupText
      .append("text")
      .attr("id", `${d["Name (Latin)"].replaceAll(" ", "-")}-cyrillic`)
      .style("pointer-events", "none")
      .style("text-anchor", "end")
      .style("font-weight", 100)
      .style("opacity", 0)
      .style("fill", fateOfDog === "Died" ? "#d88ae8" : "#f1da36")
      .attr("x", d.x)
      .attr("y", d.y + 20)
      .transition()
      .duration(transitionDuration)
      .attr("x", d.x - 60)
      .attr("y", d.y - 20)
      .style("opacity", 0.8)
      .text(d["Name (Cyrillic)"]);
  };

  drawLegend = (event) => {
    const transitionDuration = 500;
    // Drawing the legend
    let [mouse_x, mouse_y] = d3.pointer(event);
    let legend_x_position = mouse_x <= 500 ? window.innerWidth - 470 : 30;
    let legend_y_position =
      mouse_y >= window.innerHeight - 400 ? mouse_y - 100 : mouse_y + 50;
    const legend = d3
      .select("#dogs")
      .append("div")
      .attr("id", "legend")
      .style("left", legend_x_position + "px")
      .style("top", legend_y_position - 50 + "px");

    legend
      .attr("opacity", 0)
      .transition()
      .duration(transitionDuration)
      .attr("opacity", 0.9);

    const legendSvg = legend.append("svg");

    // Adding heading
    legendSvg
      .append("text")
      .style("text-anchor", "middle")
      .style("font-weight", 800)
      .style("font-size", 20)
      .attr("opacity", 0)
      .attr("textLength", "0%")
      .attr("x", 200)
      .attr("y", 30)
      .transition()
      .duration(transitionDuration)
      .attr("opacity", 1)
      .attr("textLength", "80%")
      .text("What is going on in here?");

    // Adding circle representing dog survived
    legendSvg
      .append("circle")
      .attr("cx", 70)
      .attr("cy", 100)
      .attr("r", 0)
      .style("stroke", "black")
      .style("fill", "url(#color-gradient-survived)")
      .transition()
      .duration(transitionDuration)
      .attr("r", 20);

    // Adding text to indicate circle representing dog survived
    legendSvg
      .append("text")
      .style("text-anchor", "start")
      .style("font-weight", 800)
      .style("font-size", 16)
      .attr("opacity", 0)
      .attr("x", 120)
      .attr("y", 105)
      .attr("textLength", "0%")
      .transition()
      .duration(transitionDuration)
      .attr("opacity", 1)
      .attr("textLength", "40%")
      .text("Dog survived :)");

    // Adding circle representing dog died
    legendSvg
      .append("circle")
      .attr("cx", 70)
      .attr("cy", 165)
      .attr("r", 0)
      .style("stroke", "black")
      .style("fill", "url(#color-gradient-died)")
      .transition()
      .duration(transitionDuration)
      .attr("r", 20);

    // Adding text to indicate circle representing dog did not survive
    legendSvg
      .append("text")
      .style("text-anchor", "start")
      .style("font-weight", 800)
      .style("font-size", 16)
      .attr("opacity", 0)
      .attr("x", 120)
      .attr("y", 170)
      .attr("textLength", "0%")
      .transition()
      .duration(transitionDuration)
      .attr("opacity", 1)
      .attr("textLength", "60%")
      .text("Dog did not survive :(");

    // Adding circles for circle size indicators
    // circle for 20
    legendSvg
      .append("circle")
      .attr("cx", 35)
      .attr("cy", 260)
      .attr("r", 0)
      .style("stroke", "#fafafa")
      .style("stroke-width", 2)
      .style("fill", "none")
      .transition()
      .duration(transitionDuration)
      .attr("r", 20);
    // circle for 30
    legendSvg
      .append("circle")
      .attr("cx", 45)
      .attr("cy", 260)
      .attr("r", 0)
      .style("stroke", "#fafafa")
      .style("stroke-width", 2)
      .style("fill", "none")
      .transition()
      .duration(transitionDuration)
      .attr("r", 30);
    // circle for 40
    legendSvg
      .append("circle")
      .attr("cx", 55)
      .attr("cy", 260)
      .attr("r", 0)
      .style("stroke", "#fafafa")
      .style("stroke-width", 2)
      .style("fill", "none")
      .transition()
      .duration(transitionDuration)
      .attr("r", 40);
    // circle for 50
    legendSvg
      .append("circle")
      .attr("cx", 65)
      .attr("cy", 260)
      .attr("r", 0)
      .style("stroke", "#fafafa")
      .style("stroke-width", 2)
      .style("fill", "none")
      .transition()
      .duration(transitionDuration)
      .attr("r", 50);

    // Adding text to indicate circle sizes
    legendSvg
      .append("text")
      .style("text-anchor", "start")
      .style("font-weight", 800)
      .style("font-size", 14)
      .attr("opacity", 0)
      .attr("textLength", "65%")
      .attr("x", 135)
      .attr("y", 250)
      .transition()
      .duration(transitionDuration)
      .attr("opacity", 1)
      .text("Bigger the circle the more");
    legendSvg
      .append("text")
      .style("text-anchor", "start")
      .style("font-weight", 800)
      .style("font-size", 14)
      .attr("opacity", 0)
      .attr("textLength", "65%")
      .attr("x", 135)
      .attr("y", 280)
      .transition()
      .duration(transitionDuration)
      .attr("opacity", 1)
      .text("flights the dog flew in.");

    // Adding connecting line indicator
    legendSvg
      .append("path")
      .style("pointer-events", "none")
      .attr(
        "d",
        d3.line()([
          [25, 370],
          [115, 330],
        ])
      );

    // Adding text to indicate connecting lines
    legendSvg
      .append("text")
      .style("text-anchor", "start")
      .style("font-weight", 800)
      .style("font-size", 14)
      .attr("opacity", 0)
      .attr("textLength", "68%")
      .attr("x", 130)
      .attr("y", 350)
      .transition()
      .duration(transitionDuration)
      .attr("opacity", 1)
      .text("Connected dogs flew together.");
  };

  drawDogCircles = () => {
    const dogsSvg = d3.select("#dogs").select("svg");
    const transitionDuration = 500;
    const defaultRadius = 20;
    // drawing the datapoint circles
    dogsSvg
      .selectAll("g")
      .data(this.doggoData)
      .enter()
      .append("g")
      .attr("id", (d) => d["Name (Latin)"].replaceAll(" ", "-"))
      .append("circle")
      .style("cursor", "pointer")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", defaultRadius)
      .style("fill", "url(#color-gradient-default)")
      .on("mouseover", (event, d) => {
        if (!this.infoTabIsOpen) {
          this.circleEnterTransitions(dogsSvg, d);
          this.drawLegend(event);
        }
      })
      .on("mouseout", (_, d) => {
        if (!this.infoTabIsOpen) {
          this.circlesExitTrasitions(dogsSvg, d);
          // Removing legend
          d3.selectAll("#legend").remove();
        }
      })
      .on("click", (event, d) => {
        if (!this.infoTabIsOpen) {
          this.infoTabIsOpen = true;
          this.currentOpenInfoTab = d;
          // Removing legend
          d3.selectAll("#legend").remove();
          this.displayInfoTab(event, d);
        } else {
          if (this.currentOpenInfoTab["Name (Latin)"] === d["Name (Latin)"]) {
            this.infoTabIsOpen = false;
            // Clossing the Info Tab
            d3.select("#info-tab")
              .transition()
              .duration(transitionDuration)
              .style("left", this.infoTabXPosition + "px")
              .style("opacity", 0)
              .remove();

            this.circlesExitTrasitions(dogsSvg, d);
          } else {
            this.circleEnterTransitions(dogsSvg, d);
            // Clossing the Info Tab
            d3.select("#info-tab")
              .transition()
              .duration(transitionDuration)
              .style("left", d.x + 20 + "px")
              .style("opacity", 0)
              .remove();

            this.circlesExitTrasitions(dogsSvg, this.currentOpenInfoTab);
            this.currentOpenInfoTab = d;
            this.displayInfoTab(event, d);
          }
        }
      });

    // Drawing the paws in the circles and dog name text
    this.doggoData.forEach((d) => {
      this.drawPaw(d["Name (Latin)"].replaceAll(" ", "-"), d.x, d.y);
      this.drawText(
        d["Name (Latin)"].replaceAll(" ", "-"),
        d.x,
        d.y,
        d.Fate.split(" ")[0]
      );
    });

    // Remove when the issue with Dezik not being read is solved
    d3.select("#Dezik").select("g").remove();
    d3.select("#Dezik").select("text").remove();
  };

  drawTitle = () => {
    const fontSize_yOffset = 140;
    const transitionDuration = 500;
    // Drawing the title using custom paths in svg element
    const titleSVG = d3.select("#title-card").select("svg");

    titleSVG
      .append("text")
      .style("pointer-events", "all")
      .attr("fill", "none")
      .style("cursor", "pointer")
      .attr("stroke", "#f1da36")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1)
      .attr("text-anchor", "middle")
      .attr("font-size", fontSize_yOffset)
      .style("stroke-dasharray", "1 6")
      .attr("opacity", 1)
      .on("mouseover", () =>
        titleSVG
          .select("text")
          .transition()
          .duration(transitionDuration)
          .attr("stroke", "#d88ae8")
          .style("stroke-dasharray", "1 1")
          .attr("opacity", 0.5)
      )
      .on("mouseout", () =>
        titleSVG
          .select("text")
          .transition()
          .duration(transitionDuration)
          .attr("stroke", "#f1da36")
          .style("stroke-dasharray", "1 6")
          .attr("opacity", 1)
      )
      .attr("x", +window.innerWidth / 2 - 20)
      .attr("y", fontSize_yOffset)
      .text("SOVIET SPACE DOGS");
  };

  render() {
    return (
      <React.Fragment>
        <div id="title-card">
          <svg></svg>
        </div>
        <div id="dogs">
          <svg></svg>
        </div>
        <h1>
          Inspired from&nbsp;
          <a
            href="https://old.duncangeere.com/spacedogs/"
            target="_blank"
            rel="noreferrer"
          >
            Soviet Space Dogs Visualization, By Duncan Geere
          </a>
        </h1>
        <h1>
          A visualization by&nbsp;
          <a
            href="https://github.com/SumanthVarma798"
            target="_blank"
            rel="noreferrer"
          >
            Sumanth Varma Vitrouthu
          </a>
        </h1>
      </React.Fragment>
    );
  }
}

export default Dogs;
