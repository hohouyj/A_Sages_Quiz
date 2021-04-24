import senarios from '../data/Senarios.json';

export const decideContent = (id) => {
    console.log("ID "+id.toString())
    console.log(typeof id)
    var currSenario = senarios[parseInt(id)]
    try {
        return [currSenario.senario, currSenario.senarioNo, currSenario.options]
    } catch (error) {
        return [senarios[0].senario, senarios[0].senarioNo, senarios[0].options];
    }
    
    /*switch(parseInt(id)) {
        case 1:
            return [senarios[1].senario, senarios[1].senarioNo, senarios[1].options]; 
        case 2:
            return [senarios[2].senario, senarios[2].senarioNo, senarios[2].options];
        case 3:
            return [senarios[3].senario, senarios[3].senarioNo, senarios[3].options];
        default:
            return [senarios[0].senario, senarios[0].senarioNo, senarios[0].options];
    }*/
}

export const incrementSageCount = (sageName) => {
    let currentStat = JSON.parse(localStorage.getItem('sageScore'));
    currentStat[sageName]++;
    localStorage.setItem('sageScore', JSON.stringify(currentStat));
}