const warning = (id) =>{
  if (confirm('Yakin mau dihapus?')){
    document.getElementById(id).setAttribute("id", "hapus")
  } else {
    alert('Comment tidak jadi dihapus')
  }
}

const edit = (id) =>{
  let text = ''
  let ulasan = prompt('Tulis ulasan yang ingin kamu edit:', 'Edit ulasan')
  if (ulasan){
    text = `Ulasan: ${ulasan}`
    let edit = document.getElementById("review-"+id)
    edit.innerHTML = text
  } else {
    document.getElementById("review-"+id).innerHTML
  }
  // text = `Ulasan: ${ulasan}`
  // let edit = document.getElementById("review-"+id)
  // edit.innerHTML = text
}

const edit2 = (username) => {
  let text = ''
  let ulasanUsername = prompt('Masukkan username baru kamu:', 'Isi username')
  text = ulasanUsername
  let edit = document.getElementById ("username-"+id)
  edit.innerHTML = text
}

function createData() {
  let database = arrayReview;                   
  let arrDataBaru = document.getElementById('userName').value;
  let userName = arrDataBaru;
  let skor = document.getElementById('score').value //arrData[3];
  let ulasan = document.getElementById('review').value //arrData[4];
  let output = {};
  let maxId = Number.MIN_VALUE;
  output[userName] = [];
  for (let i in database) {
    const isiData = database[i];
    for (let j = 0; j < isiData.length; j++) {
      const isiDataDalam = isiData[j];
      if (maxId < isiDataDalam.id) {
        maxId = isiDataDalam.id;
      }
    }
  }
  let tempobj = {
    id: maxId + 1,
    namaResto: document.getElementById('restoName').value,
    alamat: document.getElementById('address').value,
    rating : [skor,ulasan],
    star : 0    
  };
  output[userName].push(tempobj);

  const target = document.querySelector('#dataListContainer');
  let templateHtml = '<div class="list-group-item d-flex py-4 mb-0" id="'+ tempobj.id +'">\
      <div class="d-flex w-100 justify-content-between">\
        <div class="d-flex">\
          <div class="score-container">\
            <div><small class="opacity-50 text-nowrap float-start d-block me-4">Total Score</small></div>\
            <div><h3 class="opacity-50 text-nowrap float-start d-block me-4" id="score-'+ tempobj.id +'">'+ tempobj.rating[0] +'/10</h3></div>\
          </div>\
          <span>\
            <h5 class="mb-2" id="namaResto-'+ tempobj.id +'">'+ tempobj.namaResto +'</h5>\
            <small id="alamat-'+ tempobj.id +'">Alamat : '+ tempobj.alamat +'</small>\
            <p class="mb-0 mt-3 opacity-75" id="review-'+ tempobj.id +'">'+ tempobj.rating[1] +'</p>\
            <small id="username-'+ tempobj.id +'">Direview Oleh : <code>'+ userName +'</code></small>\
            <div class="mt-3">\
              <span><input type="button" class="btn btn-warning" onclick="warning('+ tempobj.id +')" value="Hapus"></span>\
              <span><input type="button" class="btn btn-secondary" onclick="edit('+ tempobj.id +')" value="Edit"></span>\
            </div>\
          </span>\
        </div>\
        <div class="ms-4 like-container">\
        <img src="images/star.png"  width="30px" class="tombol-like" alt="" srcset="" onclick="star(\''+ userName +'\', '+ tempobj.id +')">\
        <span><small class="opacity-50 text-nowrap" id="star-'+ tempobj.id +'"> '+ tempobj.star +'</small>\
      </div>\
      </div>\
    </div>'

    target.innerHTML += templateHtml

}