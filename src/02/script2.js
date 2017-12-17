var slideShow = {
	init: function(){
		this.setEvent()
	},
	data:{
		src:''
	},
	setEvent: function(){
		$(".js-change-trigger").on('click', this.handleClick.bind(this))
	},
	handleClick: function(e){
		e.preventDefault()
		this.changeImage(e.currentTarget.getAttribute('href'))
	},
	changeImage: function(href){
		this.data.src = href
		this.render()
	},
	render: function(){
		$(".js-change-target").attr('src',this.data.src)
	}
}
