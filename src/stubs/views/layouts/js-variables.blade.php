<script>
    window.vue_app = window.vue_app || {};
    vue_app.user = {!! auth()->user() ?: "null" !!};
</script>
