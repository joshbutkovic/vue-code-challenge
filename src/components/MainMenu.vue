<template>
    <nav>
        <ul class="nav-left">
            <li>
                <a>
                    <img src="../assets/logo_white.png" alt />
                </a>
            </li>
        </ul>
        <ul class="nav-right">
            <li v-for="item in navItems" :key="item.id">{{item}}</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'MainMenu',
    data() {
        return {
            navItems: ['Benefits', 'Safety', 'Policies'],
        };
    },
};
</script>

<style scoped lang="scss">
nav {
    border: 1px solid black;
    display: flex;
    align-items: center;
    background: #000;
    height: 3.25rem;
    padding: 0 1rem;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    .nav-left {
        list-style: none;
        flex-grow: auto;
        li {
            a {
                img {
                    width: 300px;
                }
            }
        }
    }
    .nav-right {
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        li {
            font-size: 1rem;
            margin-left: 1.5rem;
        }
    }
}
</style>