$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 700, 10, 10, "lime");
createPlatform(900, 700, 10, 10, "Blue")
createPlatform(650, 340, 10, 10, "Red")
createPlatform(600, 470, 10, 10, "Violet")
createPlatform(550, 600, 10, 10, "Green")
createPlatform(400, 350, 10, 10, "Cyan")

    // TODO 3 - Create Collectables
createCollectable("steve", 1000, 450);
createCollectable("diamond", 250, 200, 0.5, 0.7);
createCollectable("grace", 135, 170,);
createCollectable("kennedi", 300, 250,);
createCollectable("max", 900, 200,);
createCollectable("steve", 400, 350,);
createCollectable("database", 450, 400,);
createCollectable("database", 650, 150,);
createCollectable("HEART_LOCKET", 750, 450,);
createCollectable("REAL_KNIFE", 500, 200,);

    // TODO 4 - Create Cannons
createCannon("top", 200, 500);
createCannon("bottom", 400, 450);
createCannon("top", 1070, 700);
createCannon("top", 1070, 701);
createCannon("bottom", 400, 451)
createCannon("top", 200, 501)
createCannon("right", 300, 600)
createCannon("right", 500, 550)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
