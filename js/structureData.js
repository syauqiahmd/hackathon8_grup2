const arrayReview = {
  junanda88: [
    {
    id: 1,
    namaResto: 'Restoran SEDERHANA Kelapa Gading',
    alamat: 'Jl. Boulevard Raya Blok TA.2 No.22, RT.8/RW.1, Klp. Gading Tim., Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240',
    rating: [9, 'Always the best decision to be here'],
    star: 5
    },
    {
    id: 2,
    namaResto: 'SKYE',
    alamat: 'BCA Tower Lt. 56, Jl. M.H. Thamrin No. 1, RT.001 / RW.005, Menteng, RT.1/RW.5, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350',
    rating: [8.5, 'Lovely place with view.'],
    star: 4
    }
  ],
  nicko_99: [
    {
    id: 3,
    namaResto: 'PLATARAN Dharmawangsa',
    alamat: 'Jl. Dharmawangsa Raya No.6, RT.4/RW.2, Pulo, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160',
    rating: [8.7, 'A recommended Luxurious Indonesian Restaurant in Jakarta.'],
    star: 4.5
    },
    {
    id: 4,
    namaResto: 'Restoran SEDERHANA Kelapa Gading',
    alamat: 'Jl. Boulevard Raya Blok TA.2 No.22, RT.8/RW.1, Klp. Gading Tim., Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240',
    rating: [9, 'Love it. Clean dining space, reasonable price (nasi dendeng for 25k)'],
    star: 4
    }
  ],
  ahmad_s: [
    {
    id: 5,
    namaResto: 'PLATARAN Dharmawangsa',
    alamat: 'Jl. Dharmawangsa Raya No.6, RT.4/RW.2, Pulo, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160',
    rating: [8, 'Nice ambience with Javanese wooden carved'],
    star: 4
    },
    {
    id: 6,
    namaResto: 'SKYE',
    alamat: 'BCA Tower Lt. 56, Jl. M.H. Thamrin No. 1, RT.001 / RW.005, Menteng, RT.1/RW.5, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350',
    rating: [8.5, 'The view is breathtaking'],
    star: 4
    }
  ],
  jonathan123: [
    {
    id: 7,
    namaResto: 'IPPEKE KOMACHI',
    alamat: 'Mall Kelapa Gading 3 Lantai Dasar Unit 38A-B, Jalan Boulevard Kelapa Gading Blok M, Kelapa Gading, RT.13/RW.18, Klp. Gading Tim., Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240',
    rating: [8.6, 'One of my favorite Japanese Resto'],
    star: 5
    },
    {
    id: 8,
    namaResto: 'Bakmi Apin Sukajadi',
    alamat: 'Jl. Sukajadi No.170, Pasteur, Kec. Sukajadi, Kota Bandung, Jawa Barat 40162',
    rating: [9, 'You love noodles? Must try this one.'],
    star: 4
    }
  ],
  banar12: [
    {
    id: 9,
    namaResto: 'IPPEKE KOMACHI',
    alamat: 'Mall Kelapa Gading 3 Lantai Dasar Unit 38A-B, Jalan Boulevard Kelapa Gading Blok M, Kelapa Gading, RT.13/RW.18, Klp. Gading Tim., Kec. Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240',
    rating: [8.2, 'One of the oldest and tastiest Japanese Restaurant in the heart of Kelapa Gading.'],
    star: 5
    },
    {
    id: 10,
    namaResto: 'Bakmi Apin Sukajadi',
    alamat: 'Jl. Sukajadi No.170, Pasteur, Kec. Sukajadi, Kota Bandung, Jawa Barat 40162',
    rating: [8, 'This Noodle house is recommended for you'],
    star: 5
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
          <div>\
            <div><small class="opacity-50 text-nowrap float-start d-block me-4">Total Score</small></div>\
            <div><h3 class="opacity-50 text-nowrap float-start d-block me-4" id="score-'+ id +'">'+ rating[0] +'/10</h3></div>\
          </div>\
          <span>\
            <h5 class="mb-2" id="namaResto-'+ id +'">'+ namaResto +'</h5>\
            <small id="alamat-'+ id +'">Alamat : '+ alamat +'</small>\
            <p class="mb-0 mt-3 opacity-75" id="review-'+ id +'">'+ rating[1] +'</p>\
            <small id="username-'+ id +'">Direview Oleh : <code>'+ username +'</code></small>\
            <div class="mt-3">\
              <span><input type="button" class="btn btn-warning" onclick="warning('+ id +')" value="Hapus"></span>\
              <span><input type="button" class="btn btn-secondary" onclick="edit('+ id +')" value="Edit"></span>\
            </div>\
          </span>\
        </div>\
        <span><small class="opacity-50 text-nowrap ms-5" id="star-'+ id +'"> '+ star +'</small>\
        <img src="images/star.png"  width="30px" class="tombol-like" alt="" srcset="" onclick="star(\''+ username +'\', '+ id +')"></span>\
      </div>\
    </div>'

      target.innerHTML += templateHtml


    }
  }

}

readData()

function star(username, id){
  const target = document.getElementById('star-'+id)
  target.innerHTML++

  let targetarr = arrayReview[username]
  for(let i = 0; i < targetarr.length; i++){
    if(targetarr[i].id === id){
      targetarr[i].star++
    }
  }
}