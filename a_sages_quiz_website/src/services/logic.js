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

export const updateSageScore = (sageName,senarioNo)=>{
    let currentStat = JSON.parse(localStorage.getItem('sageScore'));
    currentStat[sageName].push(senarioNo);
    localStorage.setItem('sageScore', JSON.stringify(currentStat));
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

export const changeSenarioNo = (newSenarioNo) =>{
    let senarios = JSON.parse(localStorage.getItem("senarios"))
    senarios.currSenarioNo = newSenarioNo;
    localStorage.setItem("senarios", JSON.stringify(senarios))
}