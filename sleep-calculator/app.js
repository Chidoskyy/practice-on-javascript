const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8
        break;
      case 'tuesday':
        return 7.5
        break;
      case 'wednesday':
        return 6.5
        break;
      case 'thursday':
        return 6
        break;
      case 'friday':
        return 5
        break;
      case 'saturday':
        return 6
        break;
      case 'sunday':
        return 5
        break;
      default:
        return 'error type in a valid day!'
    } 
  }
  
  const getActualSleepHours = () => 
    
     getSleepHours('monday') + 
     getSleepHours('tuesday') + 
     getSleepHours('wednesday') + 
     getSleepHours('thursday') + 
     getSleepHours('thursday') + 
     getSleepHours('friday') + 
     getSleepHours('saturday') + 
     getSleepHours('sunday') 
     
  
  console.log(getActualSleepHours())
  
  
  const getIdealSleepHours = () => {
    let idealHours = 7;
      return idealHours * 7
  }
   
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours =  getIdealSleepHours()
  
  
  if (actualSleepHours === idealSleepHours) {
     console.log('User got enough sleep')
  } else if (actualSleepHours > idealSleepHours) {
     console.log('User got more than ' + (actualSleepHours - idealSleepHours) + ' hour enough sleep');
  } else if (actualSleepHours < idealSleepHours) {
     console.log('User needs more' (actualSleepHours - idealSleepHours) + 'sleep');
  } else {
    console.log('Error check your code.');
  }
  }
  
  calculateSleepDebt()
  