<template>
  <div class="flex flex-col justify-center items-center text-gray-800">
    <div class="mb-6 space-x-2">
      <button
        class="focus:outline-none"
        :class="{ 'font-bold': locale === 'en' }"
        @click="locale = 'en'"
      >
        English
      </button>
      <span>|</span>
      <button
        class="focus:outline-none"
        :class="{ 'font-bold': locale === 'zhHant' }"
        @click="locale = 'zhHant'"
      >
        繁體中文
      </button>
    </div>
    <h1 class="text-5xl font-bold">{{ t('to-do-list-on-vue-js') }}</h1>
    <p class="text-2xl font-bold">
      {{ t('you-have-tasks-length-tasks', [tasks.length]) }}
    </p>
    <div class="w-400px">
      <input
        id="input"
        v-model="task"
        type="text"
        class="
          w-full
          my-6
          px-2
          py-1
          border-2 border-gray-800
          placeholder-gray-500
          focus:outline-none
        "
        placeholder="Add task"
        @keypress.enter="addTask(task)"
      />
      <div
        v-for="(item, index) in tasks"
        :key="index"
        class="flex my-2 space-x-2"
      >
        <input
          :ref="setTaskInput"
          v-model="tasks[index]"
          type="text"
          class="
            flex-1
            pl-2
            border-2 border-transparent
            focus:border-gray-800 focus:outline-none
          "
        />
        <button
          class="
            px-2
            border-2 border-gray-800
            bg-orange-50
            font-bold
            hover:bg-gray-800 hover:text-orange-50
          "
          @click="deleteTask(index)"
        >
          {{ t('delete') }}
        </button>
        <button
          class="
            px-2
            border-2 border-gray-800
            bg-blue-50
            font-bold
            hover:bg-gray-800 hover:text-blue-50
          "
          @click="editTask(index)"
        >
          {{ t('edit') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUpdate } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

let task = ref('');
let tasks = ref(['HTML5', 'CSS3', 'JavaScript']);
let taskInput = [];

onBeforeUpdate(() => {
  taskInput = [];
});

function setTaskInput(el) {
  if (el) {
    taskInput.push(el);
  }
}

function addTask(value) {
  tasks.value.push(value);
  task.value = '';
}

function deleteTask(index) {
  tasks.value.splice(index, 1);
}

function editTask(index) {
  taskInput[index].focus();
}
</script>
