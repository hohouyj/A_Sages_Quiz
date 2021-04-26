import senarios from '../data/Senarios.json';


// get random item from a Set
function getRandomItem(set) {
    let items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)];
}

export const decideContent = () => {
    let mysenarios = JSON.parse(localStorage.getItem("senarios"))
    var completed = new Set(mysenarios['completedSenarios'])
    var totalNo = parseInt(mysenarios['totalSenarios'])
    var allQns = new Set()
    for(let i=1;i<=totalNo;++i){
        allQns.add(i)
    }
    var notCompleted = new Set()
    
    for(var elem of allQns)
    {
        if(!completed.has(elem))
            notCompleted.add(elem);
    } 
    var newSenarioNo = parseInt(getRandomItem(notCompleted))
    var currSenario = senarios[newSenarioNo]
    
    mysenarios.completedSenarios.push(newSenarioNo)
    mysenarios["currSenarioNo"] = newSenarioNo;
    localStorage.setItem("senarios", JSON.stringify(mysenarios))
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
