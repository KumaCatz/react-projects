functionToBerepeated = () => {
  for (i = 0; i < par.length; i++) {
    result = (obj[par[i]] === body[par[i]]) 
    if (result) {
      functionToBerepeated()
    }
  }
}