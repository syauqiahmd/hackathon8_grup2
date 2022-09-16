function deleteComment(){
}

const warning = (id) =>{
  if (confirm('Yakin mau dihapus?')){
    document.getElementById(id).setAttribute("id", "hapus")
  } else {
    console.log('Comment tidak jadi dihapus')
  }
}

const edit = (id) =>{
  let text = ''
  let ulasan = prompt('Tulis ulasan yang ingin kamu edit:', 'Edit ulasan')
  text = `Ulasan: ${ulasan}`
  let edit = document.getElementById("review-"+id)
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
