function noteDTO(data){
  return {
    title : data.title,
    content : data.content,
    labels : data.labels
  }
}

module.exports = noteDTO;
