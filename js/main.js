"use strict"

let cards = []
let lang = $('input[type=radio][name=language-options]:checked')[0].id

/**
* Returns card html.
* 
* @param {entry}         frantic.json entry of the card
*/
function createCard(entry) {
	const cardName = Object.keys(entry)[0]
	const cardDictionary = Object.values(entry)[0]

	let cardSlug = cardName.toLowerCase().replace(/ /g,"-")

	return `
<div class="col mb-4" data-filter="${cardName}">
	<div class="card mb-3 ${cardDictionary['class']}" style="max-width: 540px">
		<div class="row no-gutters">
			<div class="col-md-4 icon-container">
				<img src="svg/${cardSlug}.svg" class="card-img" alt="${cardName}">
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">${cardName}</h5>
					<p class="card-text">${cardDictionary[lang]}</p>
				</div>
			</div>
		</div>
	</div>
</div>
`
}

/**
* Filters the cards based on input #filter.
*/
function filter() {
	const filter = $("#filter").val().toUpperCase()

	$('#card-container').children().each(function() {
		const cardName = $(this).data('filter')

		if (cardName.includes(filter)) {
			$(this).show()
		} else {
			$(this).hide()
		}

		// scroll to top
		window.scrollTo(0, 0)
	})
}

/**
* Filter change listener.
*/
$('#filter').keyup(function () { 
	filter()
})

/**
* When document is ready:
*  - load frantic.json
*  - create cards
*  - filter cards
*/
$( document ).ready(function() {
	$.getJSON( "frantic.json", function( data ) {
cards = data  // set global variable

$.each(cards, function( index, value ) {
	$( "#card-container" ).append( createCard(value) )
})

filter()
})      
})

/**
* Language change listener:
*  - delete all cards
*  - create new cards
*  - filter cards
*/
$('input[type=radio][name=language-options]').change(function() {
lang = this.id  // update global variable

$('#card-container').empty()

$.each(cards, function( index, value ) {
	$( "#card-container" ).append( createCard(value) )
})

filter()
})

/**
* Service worker for Progressive Web App
*/
window.onload = () => {
	'use strict';

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
		.register('./service_worker.js');
	}
}