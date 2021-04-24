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
}

export const incrementSageCount = (sageName) => {
    let currentStat = JSON.parse(localStorage.getItem('sageScore'));
    currentStat[sageName]++;
    localStorage.setItem('sageScore', JSON.stringify(currentStat));
}


export const incrementSenarioNo = () =>{
    let senarios = JSON.parse(localStorage.getItem("senarios"))
    senarios["currSenarioNo"]++;
    localStorage.setItem("senarios", JSON.stringify(senarios))
}
