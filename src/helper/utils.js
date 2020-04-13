export function convertTime(time){
    let hours = parseInt(time.substring(0, 2), 10),
        minutes = time.substring(3, 5),
        ampm = 'AM';

    if (hours === 12) {
        ampm = 'PM';
    } else if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
    }
    return hours + ':' + minutes + ' ' + ampm;
}