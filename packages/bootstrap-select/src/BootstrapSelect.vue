<template>
    <select class="form-control" v-model="val">
        <template v-for="option in options">
            <option v-if="trackBy && label" :value="option[trackBy]" :key="option[trackBy]">{{ option[label] }}</option>
            <option v-else :key="option">{{ option }}</option>
        </template>
    </select>
</template>

<script>
    export default {
        name: 'BootstrapSelect',
        props: {
            'options': Array,
            'value': [Array, String],
            'trackBy': String,
            'label': String,
        },
        data() {
            return {
                val: JSON.parse(JSON.stringify(this.value)),
            }
        },
        mounted() {
            $(this.$el).selectpicker('val', this.val)
        },
        watch: {
            value(value) {
                this.$nextTick(() => $(this.$el).selectpicker('val', value))
            },
            val(val) {
                this.$emit('input', val)
            },
            options() {
                this.$nextTick(() => $(this.$el).selectpicker('refresh'))
            },
        }
    }
</script>

<style>

</style>
