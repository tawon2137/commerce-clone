<template>
    <div class="slide-container">
        <div class="slide-container__wrapper" :style="{height: this.height > 0 ? this.height + 'px' : 'auto'}">
            <slot ref="childs"></slot>
        </div>
        <button class="slide-container__button slide-container__button--next" @click="next()">next</button>
        <button class="slide-container__button slide-container__button--prev" @click="prev()">prev</button>
        <ul class="slide-container__trigger" role="tablist" >
            <li v-for="i in length" :key="i" @click="setIndex(i - 1)" :class="{'active' : (i - 1) === index}">{{i}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        initialIndex: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
            index: 0,
            height: 0,
            length: 0
        }
    },
    watch: {
        index(value) {
            this.render();
        }
    },
    mounted() {
        if(this.initialIndex > -1)  {
            this.index = 0;
        }
        this.render();
    },
    methods: {
        render() {
            const currentItem = this.$children[this.index];
            const el = this.getElementForItem(currentItem);
            this.height = el.offsetHeight;
            this.length = this.$children.length;
            this.$children.forEach(loopItem => {
                const loopEl = this.getElementForItem(loopItem);
                if(loopItem === currentItem) {
                    loopEl.classList.add('active');
                }else {
                    loopEl.classList.contains('active') && loopEl.classList.remove('active');
                }
            });
        },
        setIndex(index) {
            this.index = index;
        },
        isComponent(item) {
            return !(item instanceof HTMLElement);
        },
        getElementForItem(item) {
            return this.isComponent(item) ? item.$el : item;
        },
        next() {
            const maxCount = this.$children.length;
            if(this.index < maxCount - 1) {
                this.index++;
            }else {
              this.index = 0;
            }
        },
        prev() {
            const maxCount = this.$children.length;
            if(this.index > 0) {
                this.index--;
            }else {
              this.index = maxCount - 1;
            }
        }
    }
}
</script>

<style scoped>
    .slide-container {
        position: relative;
    }

    .slide-container__item {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        transition: opacity 0.35s ease-in-out;
        opacity: 0;
    }

    .slide-container__button {
        position: absolute;
        top: calc(50% - 40px);
        width: 120px;
        height: 120px;
        background: transparent;
        text-indent: 150%;
        overflow: hidden;
        background-size: 100% 100%;
        cursor: pointer;
    }

    .slide-container__button:focus {
        outline: none;
    }

    .slide-container__button--next {
        right: -40px;
        background-image: url('../../../assets/img/arrow-next-white.svg');
    }

    .slide-container__button--next:hover,
    .slide-container__button--next:focus {

        background-image: url('../../../assets/img/arrow-next-blue.svg');
    }

    .slide-container__button--prev {
        left: -40px;
        background-image: url('../../../assets/img/arrow-prev-white.svg');
    }

    .slide-container__button--prev:hover,
    .slide-container__button--prev:focus {
        background-image: url('../../../assets/img/arrow-prev-blue.svg');
    }

    .slide-container__item.active {
        opacity: 1;
    }

    .slide-container__wrapper {
        position: relative;
        width: 100%;
        height: auto;
        left: 0;
        top: 0;
    }

    .slide-container__trigger {
        display: flex;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 101;
    }

    .slide-container__trigger li {
        display: block;
        font-size: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 0 7px;
        cursor: pointer;
        background: #f1f1f1;
        transition: transform 0.35s ease-out, opacity 0.35s ease-out;
        opacity: 0.7;
    }

    .slide-container__trigger li.active {
        transform: scale(1.5, 1.5);
        opacity: 1;
    }

</style>
