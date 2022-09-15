const arrayReview = {
  junanda : [
    {
    id: 1,
    namaResto: 'rumah makan padang',
    alamat: 'nama jalannya',
    rating: [9, 'fgdahfgdkasgf'],
    star: 0
    },
    {
    id: 2,
    namaResto: 'rumah  padang',
    alamat: 'nama jalannya',
    rating: [9, 'fgdahfgdkasgf'],
    star: 0
    }
  ],
  nicholas : [
    {
    id: 3,
    namaResto: 'rumah makan ',
    alamat: 'nama jalannya',
    rating: [1, 'fgdahfgdkasgf'],
    star: 0
    },
    {
    id: 4,
    namaResto: 'rumah  padang',
    alamat: 'nama jalannya',
    rating: [9, 'fgdahfgdkasgf'],
    star: 0
    }
  ],
  siapa : [
    {
    id: 5,
    namaResto: 'rumah makan padang',
    alamat: 'nama jalannya',
    rating: [9, 'fgdahfgdkasgf'],
    star: 0
    },
    {
    id: 6,
    namaResto: 'rumah  padang',
    alamat: 'nama jalannya',
    rating: [9, 'fgdahfgdkasgf'],
    star: 0
    }
  ]
}

const target = document.querySelector('#dataListContainer')

function readData(){

  for(let x in arrayReview){
    let username = x
    const dataItems = arrayReview[x]
    for(let i = 0; i < dataItems.length; i++){
      const item = dataItems[i]
      const {id, namaResto, alamat, rating, star} = item

      let templateHtml = '<div class="list-group-item d-flex py-4 mb-0" id="'+ id +'">\
      <div class="d-flex w-100 justify-content-between">\
        <div class="d-flex">\
          <div class="score-sum">\
            <small class="opacity-50 text-nowrap float-start d-block me-4">Total Score</small>\
            <h3 class="opacity-50 text-nowrap float-start d-block me-4">'+ rating[0] +'</h3>\
          </div>\
          <span>\
            <h5 class="mb-2">'+ namaResto +'</h5>\
            <small>Alamat : '+ alamat +'</small>\
            <p class="mb-0 mt-3 opacity-75">'+ rating[1] +'</p>\
            <small>Direview Oleh : <code>'+ username +'</code></small>\
            <div class="mt-3">\
              <span><input type="button" class="btn btn-warning" onclick="funcName('+ [username, id] +')" value="Hapus"></span>\
              <span><input type="button" class="btn btn-secondary" onclick="funcName('+ [username, id] +')" value="Edit"></span>\
            </div>\
          </span>\
        </div>\
        <small class="opacity-50 text-nowrap ms-5"> '+ star +' <img src="images/likes.png" alt="" srcset=""></small>\
      </div>\
    </div>'

      target.innerHTML += templateHtml


    }
  }

}

readData()