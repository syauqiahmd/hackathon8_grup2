function deleteComment(){
}

const warning = () =>{
  if (confirm('Yakin mau dihapus?')){
    document.getElementById("4").setAttribute("id", "hapus")
  } else {
    console.log('Comment tidak jadi dihapus')
  }
}

const edit = () =>{
  let text = ''
  let ulasan = prompt('Tulis ulasan yang ingin kamu edit:', 'Edit ulasan')
  text = `Ulasan: ${ulasan}`
  // console.log(ulasan)
  let edit = document.getElementById("editUlasan")
  edit.innerHTML = text
}

const like = () => {
  
}


function updateData(id, arrData){
// id dan data array yg mau ditambahkan

}

function createData(arrData){
  // data dalam bentuk Array[]
  
}

function start(id){
  
}

function readData(data){
  // data dalam bentuk Array[]
}

function searchData(keyword){

}
