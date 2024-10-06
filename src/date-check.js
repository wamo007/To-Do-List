export function checkDate(i) {
    let today = new Date().toISOString().split('T')[0]; 
    let todayFormatted = new Date(today).getTime();
    let toCheck = new Date(i).getTime();
    if (toCheck === todayFormatted) {
        return true;
    } else if (toCheck < todayFormatted) {
        return 'someday';
    } else if (toCheck > todayFormatted) {
        return 'upcoming';
    } else {
        return 'anytime'
    }
}
