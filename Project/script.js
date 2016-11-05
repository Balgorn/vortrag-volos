$(document).ready(function() {
})

function test(e) {
		var search = $('#input').val();
		fetch(`https://api.spotify.com/v1/search?type=Artist&q=${search}`, {
				method: 'GET',
		}).then((response) => {
				response.json().then((json) => {
						$('.content').empty();
						json.artists.items.forEach((e,i) => {
								if (e.images.length > 0) {
									console.log(e.external_urls);
										let tmp =
										`
										<a href="${e.external_urls.spotify}">
										<div class="artist" id="${i}">
										<img src="${e.images[0].url}">
										<p>${e.name}</p>
										</div>
										</a>
										`
										$('.content').append(tmp);
								}
						});
						$('#tagInput').val("");
				})

		}).catch((e) => {
				console.log(e);
		})
		return false;
}
