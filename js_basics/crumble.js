const chopApples = () => {
    console.log("step 1 - chop apples and put them in a dish");
  };
  
  const mixCrumble = () => {
    console.log("step 2 - mix butter, sugar and flour until crumbly, spread over the apples");
  }
  const bakeCrumble = () => {
    return new Promise((resolve, reject) => {
      const burnt = false;
  
      if (burnt) {
        reject("error - Oh no, burnt crumble!");
      } 
      else {
        resolve("step 3 - Perfect golden crumble!");
      }
    })
    .then((bakedCrumble) => {
        console.log(bakedCrumble);
        enjoyCrumble();
      })
      .catch((burntCrumbleErr) => {
        console.log(burntCrumbleErr);
      });
  };
  
  const enjoyCrumble = () => {
    console.log("step 4 - Piping hot crumble - even better with custard!");
  };
  
  const makeCrumble = () => {
    chopApples();
    mixCrumble();
    bakeCrumble()
      
  };
  
  makeCrumble();

// ---------------------
// CURRENT OUTPUT:
// step 1 - chop apples and put them in a dish
// step 2 - mix butter, sugar and flour until crumbly, spread over the apples
// step 4 - Delicious crumble - even better with custard!
// step 3 - Perfect golden crumble!
