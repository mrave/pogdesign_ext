// Get all the shows on the page
const shows = document.querySelectorAll('.ep.info')

// Loop through each show and assign it a random color
shows.forEach((show) => {
  // https://rarbgtor.org/torrents.php?search=ted+lasso+s01e01+1080
  let t = show.innerText
  t = t.replaceAll("\n", " ")
  t = t.replaceAll(" ", "+")
  const s = "https://1337x.to/search/"+t+ " 1080/1/"
  //show.innerHTML = show.innerHTML+ '<a href="'+s+'" style="  font-size: 0.65rem;">Get!</a>'
  show.innerHTML = show.innerHTML+ '<a href="'+s+'" target="_blank" rel="noopener noreferrer" style="  font-size: 0.65rem;">torrent!</a>'
})


