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
    rating: [9, 'fgdahfgdkasgf'],
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
    id: 3,
    namaResto: 'rumah makan padang',
    alamat: 'nama jalannya',
    rating: [9, 'fgdahfgdkasgf'],
    star: 0
    },
    {
    id: 4,
    namaResto: 'rumah  padang',
    alamat: 'nama jalannya',
    rating: [9, 'fgdahfgdkasgf'],
    star: 0
    }
  ]
}

function testing(arr){
  // let result

  for(let x in arr){
    for(let i =0 ; i < arr[x].length; i++){
      console.log(arr[x][i].namaResto)
    }
  }

  // return result
}

console.log(testing(arrayReview))