var FindNth = (function () {
    function FindNth() {
    }
    FindNth.printNthElement = function (n) {
        var arr = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(n + 1);
        arr[1] = 4;
        arr[2] = 7;
        for (var i = 3; i <= n; i++) {
            {
                if (i % 2 !== 0)
                    arr[i] = arr[(i / 2 | 0)] * 10 + 4;
                else
                    arr[i] = arr[((i / 2 | 0)) - 1] * 10 + 7;
            }
            ;
        }
        return arr[n];
    };
    FindNth.main = function (args) {
        var n = 7;
        console.info(FindNth.printNthElement(n));
    };
    return FindNth;
}());
FindNth["__class"] = "FindNth";
FindNth.main(null);
