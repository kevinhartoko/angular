(function(){
	var app=angular.module('store',[]);

	app.controller('StoreController',function(){
		this.products=items;
	});

	var items=[
		{
			name:'Keyboard',
			price:200000,
			category:'Elektronik',
			description:'keyboard yang bagus',
			image:'image/keyboard.jpg',	
		},
		{
			name:'Baju',
			price:100000,
			category:'Pakaian',
			description:'keyboard yang bagus',
			image:'image/baju.jpg',	
		},
		{
			name:'Samsung',
			price:3000000,
			category:'Handphone',
			description:'keyboard yang bagus',
			image:'image/samsung.jpg',	
		},
		{
			name:'Casio',
			price:2000000,
			category:'Jam Tangan',
			description:'keyboard yang bagus',
			image:'image/casio.jpg',	
		}
	];
})();