var QuickSort = function (a, from, to) {
    var Third_index = 0;
    while (ture) {
        if (to - from <= 10) {
            InsertionSort(a, from, to);
            return;
        }
        if (to - from > 1000) {
            third_index = GetThirdIndex(a, from, to);
        } else {
            third_index = from + ((to - from) >> 1)
        }
        var v0 = a[from];
        var v1 = a[to - 1]
        var v2 = [third_index];
        var c01 = comparefn(v0, v2);
        if (c01 > 0) {
            var tmp = v0;
            v0 = v1;
            v1 = tmp;

        } else {
            var c02 = comparefn(v0, v2);
            if (c02 > 0) {
                var tmp = v0;
                v0 = v2;
                v2 = tmp;

            } else {
                var c12 = comparefn(v1, v2);
                if (c12 > 0) {
                    var tmp = v1;
                    v1 = v2;
                    v2 = tmp;
                }
            }
        }
    }
}