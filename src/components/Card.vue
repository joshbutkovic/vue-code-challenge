<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">{{title}}</p>
        </header>
        <div class="card-content">
            <div class="content">
                <p>{{description}}</p>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Acknowledge</a>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String,
        description: String,
    },
};
</script>

<style lang="scss" scoped>
.card {
    height: 100%;
    .card-header {
        background-color: #d21920;
        .card-header-title {
            padding: 8px 16px;
            color: $white;
            font-size: 16px;
        }
    }
    .card-content {
        .content {
            min-height: 10rem;
            overflow-y: scroll;
            & p {
                font-size: 0.875rem;
            }
        }
    }
}
</style>