//abstraction

// export function Location(longitude, latitude) {

//     const point = {}


//     if (longitude < 0 || latitude < 0) {
//         console.log('invalid point');
//         throw 'invalid point'
//     } else {
//         point.longitude = longitude
//         point.latitude = latitude
//     }

//     this.getPoint = function () {
//         console.log(point);
//         return point
//     }

//     this.setPoint = function (currentLoc) {
//         if (currentLoc.longitude < 0 || currentLoc.latitude < 0) {
//             throw 'invalid point';
//         } else {
//             point.longitude = currentLoc.longitude
//             point.latitude = currentLoc.latitude
//         }
//     }
// }

export function Location(longitude, latitude) {

    const point = {}


    if (longitude < 0 || latitude < 0) {
        console.log('invalid point');
        throw 'invalid point'
    } else {
        point.longitude = longitude
        point.latitude = latitude
    }

    Object.defineProperty(this, 'currentPoint', {
        get: function () { return point },
        set: function (currentLoc) {
            if (currentLoc.longitude < 0 || currentLoc.latitude < 0) {
                throw 'invalid point';
            } else {
                point.longitude = currentLoc.longitude
                point.latitude = currentLoc.latitude
            }
        }
    })
}







