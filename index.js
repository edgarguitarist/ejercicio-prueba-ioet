
// eslint-disable-next-line no-undef
const name_file = process.argv[2] ?? 'my-test-data.txt'

const txtToObject = (archivo) =>{
    let line, person, schedule, day, time, arrival, exit
    let objeto = {}    
    let fs = require('fs')
    let entries = fs.readFileSync(archivo, 'utf8').split('\r\n')
    if(entries.length == 0){return objeto}
    for (let i = 0; i < entries.length; i++) {
        line = entries[i].replace(/\s/g, '').split('=')
        if(line.length != 2){
            continue
        }
        person = line[0] 
        schedule = line[1].split(',')
        objeto[person] = {}
        for (let j = 0; j < schedule.length; j++) {
            day = schedule[j].substring(0, 2)
            time = schedule[j].substring(2, schedule[j].length).split('-')
            if(time.length != 2){
                continue
            }
            arrival  = time[0]
            exit = time[1]
            objeto[person][day] = {
                'arrival': arrival,
                'exit': exit
            }             
        }
    }
    return objeto
}

const checkSchedule = (objeto, person1, person2) =>{    
    let schedule1 = objeto[person1]
    let schedule2 = objeto[person2]
    let count = 0
    let days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
    let day, arrival1, exit1, arrival2, exit2 

    for (let i = 0; i < days.length; i++) {
        day = days[i]
        if (schedule1[day] && schedule2[day]) {
            arrival1 = schedule1[day].arrival
            exit1 = schedule1[day].exit
            arrival2 = schedule2[day].arrival
            exit2 = schedule2[day].exit
            if (timeToMinutes(arrival1) < timeToMinutes(exit2) && timeToMinutes(arrival2) < timeToMinutes(exit1)) {
                count++
            }
        }
    }
    return count
}

const timeToMinutes = (time) =>{
    let hour = parseInt(time.substring(0, 2))
    let minutes = parseInt(time.substring(3, 5))
    return hour * 60 + minutes
}

const comparesAll = (objeto) =>{
    let keys = Object.keys(objeto)
    let result = ''
    for (let i = 0; i < keys.length-1; i++) {
        for (let j = 0; j < keys.length; j++) {
            if (i !== j && j > i) {
                let coincidences = checkSchedule(objeto, keys[i], keys[j]) ?? 0
                result += coincidences > 0 ? `${keys[i]}-${keys[j]}: ${coincidences} \r\n`  : ''                
            }
        }
    }
    return result
}

console.log(comparesAll(txtToObject(name_file)))

exports.testTxtToObject = txtToObject(name_file)