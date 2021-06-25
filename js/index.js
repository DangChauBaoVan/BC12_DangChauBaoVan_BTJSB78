getEle = function (id) {
    return document.getElementById(id);
}
kiemTraSoNguyen = function (number) {
    return number % 1 === 0;
}
var hienThiMang = function (arr) {
    var content = `
        <tr>
            <td>${arr[0]}</td>
            <td>${arr[1]}</td>
            <td>${arr[2]}</td>
            <td>${arr[3]}</td>
            <td>${arr[4]}</td>
            <td>${arr[5]}</td>
            <td>${arr[6]}</td>
            <td>${arr[7]}</td>
            <td>${arr[8]}</td>
            <td>${arr[9]}</td>
        </tr>
        <tr>
            <td> i = 0 </td>
            <td> i = 1 </td>
            <td> i = 2 </td>
            <td> i = 3 </td>
            <td> i = 4 </td>
            <td> i = 5 </td>
            <td> i = 6 </td>
            <td> i = 7 </td>
            <td> i = 8 </td>
            <td> i = 9 </td>
        </tr>
    `
    return content;
}
var bubbleSort = function (arr) {
    var swapped = false;
    for (var i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j + 1] = [arr[j], arr[j] = arr[j + 1]][0];
                swapped = true;
            }
        }
        if (swapped == false) break;
    }
}
kiemTraSoNguyenTo = function (number) {
    var check = true;
    if (number < 2) {
        check = false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            check = false;
            break;
        }
    }
    return check;
}


var moMenu = getEle('openMenu');
var x = getEle('menu');
x.style.display = "none";
moMenu.onclick = function () {

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
getEle('closeResultB6').onclick = function () {
    getEle('showResultB6').style.display = "none";
}
getEle('closeResultB7').onclick = function () {
    getEle('showResultB7').style.display = "none";
}
var arr = [];
var index = 1;
getEle('taoMang').onclick = function () {
    var showInput = getEle('inputArray');
    showInput.style.display = "block";

    getEle('themPhanTu').onclick = function () {
        var phanTu = Number(getEle('inpuElement').value);
        var label = getEle('lbThongBao');
        if (kiemTraSoNguyen(phanTu) == false) {
            swal({
                title: "Sai định dạng",
                text: "Bạn phải nhập số nguyên",
                icon: "warning",
            });
            return;
        }

        label.innerHTML = 'Mời bạn nhập vào phần tử thứ ' + index + " : ";
        arr.push(phanTu);

        index++;
        getEle('inpuElement').value = '';
        if (index > 10) {
            showInput.style.display = "none";
            getEle('taoMang').style.display = "none";
            swal({
                title: "OK!",
                text: "Bạn đã nhập đủ phần tử rồi",
                icon: "success",
            });
            getEle('showArray').style.display = "block";
            moMenu.style.display = "block";
            getEle('showTable').innerHTML = hienThiMang(arr);
        }
    }

    console.log(arr)
}
//Selection 1
getEle('select1').onclick = function () {
    
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    if(sum==0){
        swal({
            text: "Mảng của bạn không có số dương để tính tổng !",
            icon: "error",
        });
    }else{
        swal({
            text: "Tổng các số dương trong mảng là: " + sum,
            icon: "success",
        });
    }
}
//Selection 2
getEle('select2').onclick = function () {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    if (count == 0) {
        swal({
            text: "Mảng của bạn không có số dương!",
            icon: "error",
        });
    } else {
        swal({
            text: "Mảng của bạn có " + count + " số dương ",
            icon: "success",
        });
    }
}
//Selection 3
getEle('select3').onclick = function () {
    
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    swal({
        text: "Số nhỏ nhất trong mảng là: " + min,
        icon: "success",
    });
}
//Selection 4
getEle('select4').onclick = function () {
    
    var min;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            min = arr[i];
            break;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if ((min > arr[i]) && (arr[i] > 0)) {
            min = arr[i];
        }
    }
    if (min == undefined) {
        swal({
            text: "Mảng của bạn không có số dương!",
            icon: "error",
        });
    } else {
        swal({
            text: "Số dương nhỏ nhất trong mảng là: " + min,
            icon: "success",
        });
    }

}
//Selection 5
getEle('select5').onclick = function () {
    
    var soChan;
    for (var i = (arr.length - 1); i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            soChan = arr[i];
            break;
        }
    }
    if (soChan == undefined) {
        swal({
            text: "Mảng bạn không có số chẵn",
            icon: "error",
        });
    } else {
        swal({
            text: "Số chẵn cuối cùng trong mảng là: " + soChan,
            icon: "success",
        });
    }

}
//Selection 6
getEle('select6').onclick = function () {
    getEle('showResultB6').style.display = "block";
    getEle('doiViTri').onclick = function () {
        var viTri1 = Number(getEle('ipViTri1').value);
        var viTri2 = Number(getEle('ipViTri2').value);
        if((viTri1 > 9) || (viTri1 <0) || (kiemTraSoNguyen(viTri1) == false)) {
            swal({
                title: "SAI ĐỊNH DẠNG",
                text: "Vị trí 1 phải là số từ 0-9",
                icon: "warning",
            });
            return;
        }
        if((viTri2 > 9) || (viTri2 <0) || (kiemTraSoNguyen(viTri2) == false)) {
            swal({
                title: "SAI ĐỊNH DẠNG",
                text: "Vị trí 2 phải là số từ 0-9",
                icon: "warning",
            });
            return;
        }
        if(viTri1 == viTri2 || viTri2 == viTri1){
            swal({
                title: "Chú Ý",
                text: "Bạn đang nhập hai vị trí giống nhau",
                icon: "warning",
            });
            return;
        }
        arr[viTri2] = [arr[viTri1], arr[viTri1] = arr[viTri2]][0];
        getEle('showArray2').style.display = "block";
        getEle('tbViTriHoanDoi').innerHTML = 'Mảng Bạn Sau Khi Đổi Chỗ: ' + arr[viTri1] + ' <=> ' + arr[viTri2];
        getEle('showTable2').innerHTML = hienThiMang(arr);
    }

}
//Selection 7
getEle('select7').onclick = function () {
    getEle('showResultB7').style.display = "block";
    getEle('showArray3').style.display = "block";
    var swapped = false;
    for (var i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j + 1] = [arr[j], arr[j] = arr[j + 1]][0];
                swapped = true;
            }
        }
        if (swapped == false) break;
    }
    console.log(arr)
    getEle('showTable3').innerHTML = hienThiMang(arr);
}
//Selection 8
getEle('select8').onclick = function () {
    
    var soNguyenTo;
    for (var i = 0; i < arr.length; i++) {
        if (kiemTraSoNguyenTo(arr[i]) == true) {
            soNguyenTo = arr[i];
            break;
        }
    }
    if (soNguyenTo == undefined) {
        swal({
            text: 'Mảng của bạn không có số nguyên tố !',
            icon: "error",
        });
    } else {
        swal({
            text: 'Số nguyên tố đầu tiên trong mảng là ' + soNguyenTo,
            icon: "success",
        });
    }
}
//Selection 9
getEle('select9').onclick = function () {
    getEle('showResultB9').style.display = "block";
    var idx = 1;
    var arrReal = [];
    getEle('addEle').onclick = function () {
        var element = Number(getEle('ipEle').value);
        var lbNhapMang = getEle('lbNhapMang');

        lbNhapMang.innerHTML = 'Mời bạn nhập vào phần tử thứ ' + idx + " : ";
        arrReal.push(element);

        idx++;
        getEle('ipEle').value = '';
        if (idx > 10) {
            getEle('taoMangThuc').style.display = "none";
            swal({
                title: "OK!",
                text: "Bạn đã nhập đủ phần tử rồi",
                icon: "success",
            });
            getEle('showArrayReal').style.display = "block";
            getEle('showTableReal').innerHTML = hienThiMang(arrReal);
        }
    }
    getEle('demSoDuong').onclick = function () {
        var count = 0;
        for (var i = 0; i < arrReal.length; i++) {
            if (kiemTraSoNguyen(arrReal[i]) == true && arrReal[i] > 0) {
                count++;
            }
        }
        if (count == 0) {
            swal({
                text: "Mảng của bạn không có số dương!",
                icon: "error"
            });
        } else {
            swal({
                text: "Mảng của bạn có " + count + 'số dương',
                icon: 'success'
            })
        }
    }
    getEle('closeResultB9').onclick = function () {
        getEle('showResultB9').style.display = "none";
    }


}
//Selection 10
getEle('select10').onclick = function () {
    
    var soDuong = 0;
    var soAm = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            soDuong++;
        }
        if(arr[i] < 0){
            soAm++;
        }
    }
    if( soDuong == 0 && soAm == 0){
        swal({
            text: 'Mảng của bạn không có số âm hay dương !',
            icon: "error",
        });
        return;
    }
    if(soDuong > soAm){
        swal({
            text: 'Số dương nhiều hơn số âm',
            icon: "success",
        });
    }else if(soDuong < soAm){
        swal({
            text: 'Số âm nhiều hơn số dương',
            icon: "success",
        });
    }else{
        swal({
            text: 'Số âm và số dương bằng nhau',
            icon: "success",
        });
    }
}

