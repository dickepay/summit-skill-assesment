<script setup lang="ts">
import { onBeforeUnmount, onUnmounted, ref } from 'vue';

   const props = defineProps(['data']);
   const emit = defineEmits(['delete'])

   const isBeingRemoved = ref(false);
    const remove = () => {
        isBeingRemoved.value = true;
        setTimeout(() => {
            emit('delete', props.data.id)
        }, 1);
    }

</script>

<template>
    <i-list-group-item :class="{remove : isBeingRemoved}">
        <i-container>
            <i-row>
                <i-column xs="11">
                    {{props.data.task}}
                </i-column>
                <i-column xs="1">
                    <i-button circle @click="remove"><i class="icon icon-close-2 white"></i></i-button>
                </i-column>
            </i-row>
        </i-container>
    </i-list-group-item>
</template>

<style scoped>

button
{
    vertical-align: middle;
    background-color: transparent;
    color: lightgray;
    border: none;
    line-height: 2px;
}

button
i {
    font-size: xx-large;
}

.remove {
 animation-name: removebutton;  
 animation-duration: 0.5s;
 animation-timing-function: ease-in-out;
}

@keyframes removebutton {
  0% { transform: scale(1.0);}
  2% { transform: scale(1.05);}
  50% {opacity: 1.0;}
  100% { transform: scale(0.0); opacity: 0.0;};
}
</style>
