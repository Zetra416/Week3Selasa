var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2 (input) {
  input.splice(1,1, "Roman Alamsyah Elsharawy ");
  input.splice(2,1, "Provinsi Bandar Lampung");
  input.splice(4,1, "Pria");
  input.splice(5,1, "SMA Internasional Metro");
  console.log(input);

  var words = input[3].split("/");
  var bulan = parseInt(words[1])
  switch (bulan) {
    case 1:
      console.log("Januari");
      break;
    case 2:
      console.log("Februari");
      break;
    case 3:
      console.log("Maret");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("Mei");
      break;
    case 6:
      console.log("Juni");
      break;
    case 7:
      console.log("Juli");
      break;
    case 8:
      console.log("Agustus");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("Oktober");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("Desember");
      break;
  }
  var join = words.join("-");
  var sort = words.sort(function(a,b){ return b - a});
  var splice = input[1].slice(0,15);
  console.log(sort);
  console.log(join);
  console.log(splice);

}

dataHandling2(input);
