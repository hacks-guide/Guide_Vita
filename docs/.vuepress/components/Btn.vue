<template>
	<kbd :class="type" v-html="char"></kbd>
</template>

<script>
	export default {
		props: {
			btn: { required: true },
		},

		data: () => ({
			_type: "face",
			_char: ""
		}),

		computed: {
			type() { return this._type; },
			char() { return this._char; }
		},

		created() {
			switch(this.btn.toLowerCase()) {
				case "cross":
				case "confirm":
					this._char = "×";
					break;
				case "circle":
				case "cancel":
					this._char = "○";
					break;
				case "triangle":
					this._char = "△";
					break;
				case "square":
					this._char = "□";
					break;
				case "l":
					this._char = "L";
					this._type = "l";
					break;
				case "r":
					this._char = "R";
					this._type = "r";
					break;
				default:
					this._char = this.btn;
					this._type = "";
					break;
			}
		},

		mounted() {
			switch(this.btn.toLowerCase()) {
				case "confirm":
					this._char = this.isJapanese() ? "○" : "×";
					break;
				case "cancel":
					this._char = this.isJapanese() ? "×" : "○";
					break;
			}
		},

		methods: {
			isJapanese() {
				return localStorage.japanese === "true";
			}
		}
	};
</script>
