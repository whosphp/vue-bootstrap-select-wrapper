<template>
    <div id="app" class="container">
        Single:
        <bootstrap-select :options="options" v-model="value"></bootstrap-select>

        Multi:
        <bootstrap-select :options="options" v-model="value1" multiple></bootstrap-select>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                options: [
                    1, 2, 3
                ],
                value: '',
                value1: [],
            }
        }
    }
</script>
