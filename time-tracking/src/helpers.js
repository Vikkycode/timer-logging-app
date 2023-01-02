import { v4 as uuidv4} from 'uuid'

export function newTimer(attrs={}){
    return {
        title:attrs.title || 'Title',
        project:attrs.project || 'Project',
        id:uuidv4(),
        elapsed:0
    }
}

export function findById (array,id,cb){
    cb(array.find(el => el.id === id));
}

export function renderElapsedString (elapsed,runningSince){
    let totalElapsed = elapsed;
    if(runningSince){
        totalElapsed+= Date.now() - runningSince;
    }
    return millisecondsToHuman(totalElapsed)
}

export function millisecondsToHuman(ms){
    const seconds = Math.floor((ms / 1000)% 60);
    const minutes = Math.floor((ms /1000/ 60) % 60)
    const hours = Math.floor((ms /1000/ 60 / 60))
    return [
        pad(hours.toString(),2),
        pad(minutes.toString(),2),
        pad(seconds.toString(),2)
    ].join(':')
}

export function pad(numberString,size){
    let padded = numberString;
    while (padded.length < size) padded = '0' + padded;
    return padded;
}

export default {
    millisecondsToHuman:millisecondsToHuman,
    newTimer:newTimer,
    findById:findById,
    renderElapsedString:renderElapsedString,
}