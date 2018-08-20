Vue.component('product',{
	props: ['name','source','desc'],
	template: '<div class="product__item"><div class="product__inner"><img :src="source" :alt="name" /><h3>{{name}}</h3><p>{{desc}}</p></div></div>'
})

new Vue({
	el: '#products',
	data: function(){
		return{
			test: 'Hello',
			list: null,
			categories: ["cinematic","contemporary","electronic","atmospheric","world","jazz","pop"],
			selectedCategories: ['cinematic']
		}
	},
	mounted: function(){
		axios.get('js/products.json').then(response =>{
			console.log(response.data);
			this.list = response.data;
		}).catch(error =>{
			console.log(error);
		})
	},
	methods: {
		resetFilters: function(){
			this.selectedCategories = [];
		}
	},
	computed: {
		filteredProducts: function(){
			if(this.list != null){
				return this.list.filter(item => {
					//debugger;
					if(this.selectedCategories.length){
			        	for(var i = 0; i<this.selectedCategories.length; i++){
			        		if(item.categories.indexOf(this.selectedCategories[i]) != -1){
			        			return true;
			        		}
			        	}
			        }else{
			        	return true;
			        }
		        })
			}
		}
	}
})
