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
    height: 260px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    border: 1px solid #b4b4b4;
    &:hover {
        box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25),
            0 5px 5px rgba(0, 0, 0, 0.22);
    }
    .card-header {
        background-color: #d21920;
        align-items: center;
        .card-header-title {
            padding: 7px 16px;
            color: $white;
            font-size: 14px;
        }
        .acknowledge-button {
            margin-right: 1rem;
            svg {
                font-size: 1.125rem;
                path {
                    transition: all 200ms ease-in-out;
                    fill: #ededed;
                    &:hover {
                        fill: $black;
                    }
                }
            }
        }
    }
    .card-content {
        padding: 1.125rem;
        padding-bottom: 0;
        min-height: 13rem;
        max-height: 13rem;
        overflow-y: scroll;
        .content {
            & p {
                font-size: 0.875rem;
            }
        }
    }
}
</style>