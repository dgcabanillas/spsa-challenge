export const formatNumber = (number, cant_dec) => {
    const aux = (
        cant_dec ? 
        function(a, b) {
            const factor = Math.pow(10, b);
            return "" + Math.round(a * factor) / factor;
        }(number, cant_dec)
        :
        "" + Math.round(number)
    ).split(".");
    
    if( (aux[1] || "").length < cant_dec ) {
        aux[1] = aux[1] || "";
        aux[1] += new Array(cant_dec - aux[1].length + 1).join("0");
    }
    return aux.join(".");
}

export const average = ( numbers ) => {
    const sum = numbers.reduce((sum, num) => sum + num, 0);
    return sum / numbers.length;
}

export const standard_deviation = ( numbers ) => {
    const avg = average(numbers);
    const sum = numbers.reduce((sum, num) => sum + Math.pow(num - avg, 2), 0);
    return Math.pow( sum / numbers.length, 0.5 );
}

export const calculateAge = ( birthdate, now = new Date() ) => {
    if( birthdate.getTime() < now.getTime() ) {
        let age = 0;
        if( birthdate.getFullYear() < now.getFullYear() ) {
            age = now.getFullYear() - birthdate.getFullYear();
            if(  
                birthdate.getMonth() > now.getMonth() ||
                (
                    birthdate.getMonth() === now.getMonth() &&
                    birthdate.getDate() > now.getDate()
                )
            ) {
                age--;
            }
        }
        return age;
    } 
    return "";
}

export const estimateDeathDate = ( age ) => {
    let remainingYears;
    const maxAge = Math.floor(Math.random() * 31) + 60; // [60 - 90]
    if( age > maxAge ) {
        remainingYears = Math.floor(Math.random() * 6); // [0 - 5]
    } else {
        remainingYears = maxAge - age;
    }
    const today = new Date();
    const deathDate = new Date(
        today.getFullYear() + remainingYears, 
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 25)
    )
    return deathDate;
}

export const seconds2datestring = ( seconds ) => {
    const date = new Date(seconds * 1000);
    const dd = date.getDate();
    const mm = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    const yy = date.getFullYear();
    return `${dd}-${mm}-${yy}`;
}