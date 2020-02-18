//const add = (a, b) => a + b

module.exports = {
    add(value1, value2) {

        if (value1 == null || value2 == null) {
            return 0;
        }
        else if (value1 == Number || value2 == Number) {
            return 0;
        }
        else if (typeof value1 == undefined || typeof value2 == undefined) {
            return 0;
        }
        else if (value1 == NaN || value2 == NaN) {
            return 0;
        }
        else if (value1 == "" || value2 == "") {
            return 0;
        }
        return value1 + value2;
    }
}