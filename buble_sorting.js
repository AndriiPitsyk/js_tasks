var a = [3,5,2,1,4,9,12,7];
var length = a.length;

for (var i = length ; i >= 0; i--) {
    for (var j = 0; j < length; j++) {
        if (a[j] > a[j + 1]) {
            var t = a[j];
            a[j] = a[j + 1];
            a[j + 1] = t;
        }
    }
}

console.log(a)

