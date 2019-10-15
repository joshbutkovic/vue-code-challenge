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
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25),
            0 5px 5px rgba(0, 0, 0, 0.22);
    }
    .card-header {
        background-color: #d21920;
        .card-header-title {
            padding: 8px 16px;
            color: $white;
            font-size: 16px;
        }
    }
    .card-content {
        padding: 1rem;

        .content {
            min-height: 14rem;
            max-height: 14rem;
            overflow-y: scroll;
            & p {
                font-size: 0.875rem;
            }
        }
    }
}
</style>