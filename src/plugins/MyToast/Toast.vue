<template>
    <v-slide-y-transition>
        <v-snackbar v-model="snackbar" :timeout="timeout" top :color="color">
            {{ text }}
            <template v-slot:action="{ attrs }">
                <v-btn :color="color === 'default' ? 'red' : 'white'" dark text v-bind="attrs" @click="handleClose">{{ cancelText }}</v-btn>
            </template>
        </v-snackbar>
    </v-slide-y-transition>
</template>

<script>
let timer = null;
export default {
	props: {
		timeout: {
			type: Number,
			default: 5000,
		},
		color: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
		close: {
			type: Function,
			default: () => {},
		},
		cancelText: {
			type: String,
			default: 'Close',
		},
	},
	data: () => ({
		snackbar: false,
	}),
	methods: {
		handleClose() {
			clearTimeout(timer);
			this.snackbar = false;
			this.close();
		},
		init() {
			this.snackbar = true;
			this.$nextTick(() => {
				timer = setTimeout(() => {
					this.close();
				}, this.timeout);
			});
		},
	},
	mounted() {
		this.init();
	},
};
</script>