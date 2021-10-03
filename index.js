

function superbowlWin(array){
    let yearWin = array.find(element => element.result === "W");
    if (yearWin === undefined){
        return undefined
    }
    else return yearWin.year;
    
}

superbowlWin(record);
