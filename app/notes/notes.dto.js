function noteDTO(data){
  let note = {};
  const keys = ['title', 'content', 'labels'];
  keys.forEach(k => {
    if(data.hasOwnProperty(k)){
      note[k] = data[k];
    }
  })
  return note;
}

module.exports = noteDTO;
