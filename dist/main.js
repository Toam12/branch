const $input = $("#input")
const $button = $("#button")
const $container = $("#container")


$button.on('click', function(){
	const $inputVal = $input.val()
	$.get(`/route/${$inputVal}`, function(name){
		$container.append(name)
	})
})


