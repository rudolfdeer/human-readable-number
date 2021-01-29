module.exports = function toReadable(number) {
    let x = number.toFixed(2);
    if (x < 0 || x > 999999999999999.99) {
        return false;
    } else if (number == 0) {
        return "zero";
    } else {
        var groups = new Array();

        groups[1] = new Array();
        groups[2] = new Array();
        groups[3] = new Array();
        groups[4] = new Array();

        groups[1][-1] = "thousand";

        groups[2][-1] = "million";

        groups[3][-1] = "milliard";

        groups[4][-1] = "billion";

        var names = new Array();
        names[1] = "one";
        names[2] = "two";
        names[3] = "three";
        names[4] = "four";
        names[5] = "five";
        names[6] = "six";
        names[7] = "seven";
        names[8] = "eight";
        names[9] = "nine";
        names[10] = "ten";
        names[11] = "eleven";
        names[12] = "twelve";
        names[13] = "thirteen";
        names[14] = "fourteen";
        names[15] = "fifteen";
        names[16] = "sixteen";
        names[17] = "seventeen";
        names[18] = "eighteen";
        names[19] = "nineteen";
        names[20] = "twenty";
        names[30] = "thirty";
        names[40] = "forty";
        names[50] = "fifty";
        names[60] = "sixty";
        names[70] = "seventy";
        names[80] = "eighty";
        names[90] = "ninety";
        names[100] = "one hundred";
        names[200] = "two hundred";
        names[300] = "three hundred";
        names[400] = "four hundred";
        names[500] = "five hundred";
        names[600] = "six hundred";
        names[700] = "seven hundred";
        names[800] = "eight hundred";
        names[900] = "nine hundred";
        let r = "";
        let i, j;

        let y = Math.floor(x);

        var t = new Array();

        for (i = 0; i < 4; i++) {
            t[i] = y % 1000;
            y = Math.floor(y / 1000);
        }

        var d = new Array();

        for (i = 0; i < 4; i++) {
            d[i] = new Array();
            d[i][0] = t[i] % 10;
            d[i][10] = (t[i] % 100) - d[i][0];
            d[i][100] = t[i] - d[i][10] - d[i][0];
            d[i][11] = t[i] % 100;
        }

        for (i = 4; i >= 0; i--) {
            if (t[i] > 0) {
                if (names[d[i][100]])
                    r +=
                        " " +
                        (typeof names[d[i][100]] == "object"
                            ? names[d[i][100]][i]
                            : names[d[i][100]]);

                if (names[d[i][11]])
                    r +=
                        " " +
                        (typeof names[d[i][11]] == "object"
                            ? names[d[i][11]][i]
                            : names[d[i][11]]);
                else {
                    if (names[d[i][10]])
                        r +=
                            " " +
                            (typeof names[d[i][10]] == "object"
                                ? names[d[i][10]][i]
                                : names[d[i][10]]);
                    if (names[d[i][0]])
                        r +=
                            " " +
                            (typeof names[d[i]] == "object"
                                ? names[d[i]][i]
                                : names[d[i][0]]);
                }

                if (!i == 0) r += " " + groups[i][-1];
            }
        }

        return r.trim();
    }
};
