const checkAir = function (samples, threshold) {
    let total = samples.length 
    let dirtyCounter = 0 
    let percentage = 0
    
    for (let i = 0 ; i < total ; i++){
      if (samples[i]=== 'dirty'){
        dirtyCounter += 1
      } 
    }
    
    percentage = dirtyCounter/total
    console.log(percentage)
    
    if (percentage < threshold){
      return "clean"
    } else {
      return "Polluted"
    }
    };
    
    console.log(checkAir(
      ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
      0.3
    ));
    
    console.log(checkAir(
      ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
      0.25
    ));
    
    console.log(checkAir(
      ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
      0.9
    ))
    
    
    // Polluted
    // Polluted
    // Clean