var Term = document.registerElement('x-term', {
	prototype: Object.create(HTMLPreElement, {
		clear: {
			value: function() {
				this.innerHTML = '';
			}
		},
		createdCallback: {
			value: function() {
			}
		}
	}),
	extends: 'pre'
});
