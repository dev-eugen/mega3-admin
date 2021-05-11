<template>
  <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
    <!-- Profile section -->
   
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">
          Личная информация
        </h2>
        <p class="mt-1 text-sm text-gray-500">
          Настройте и сохраните личную информацию
        </p>
      </div>

      <div class="mt-6 flex flex-col lg:flex-row">
        <div class="flex-grow space-y-6"></div>
      </div>

      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label for="first_name" class="label">Имя</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            autocomplete="given-name"
            class="input"
          />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label for="last_name" class="label" >Фамилия</label>
          <input
           type="text"
            autocomplete="family-name"
            class="input"
          />
        </div>

        <div class="col-span-12">
          <label for="url" class="label">Отчество</label>
          <input type="text" name="url" id="url" class="input" />
        </div>
      </div>
    </div>
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">
          Логин и пароль
        </h2>
        <p class="mt-1 text-sm text-gray-500">Данные для авторизации</p>
      </div>

      <div class="mt-6 flex flex-col lg:flex-row">
        <div class="flex-grow space-y-6"></div>
      </div>

      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label for="first_name" class="label">Номер телефона</label>

          <input
         type="text"
            class="input"
          />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label for="last_name" class="label">Пароль</label>
          <input
           type="text"
          
            class="input"
          />
        </div>

        <div class="col-span-12">
          <label for="url" class="label">E-mail</label>
          <input type="text" name="url" id="url" class="input" />
          <p class="mt-4 text-sm text-gray-500">
            Настройте и сохраните личную информацию
          </p>
        </div>
      </div>
    </div>
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">
          Настройки интерфейса
        </h2>
        <p class="mt-1 text-sm text-gray-500">Настройки языка и темы</p>
      </div>

      <div class="mt-6 flex flex-col lg:flex-row">
        <div class="flex-grow space-y-6"></div>
      </div>

      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label for="first_name" class="label">Язык интерфейса</label>

          <select
          
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>UA</option>
            <option selected="">RU</option>
            <option>EN</option>
          </select>
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label for="last_name" class="label">Тема</label>
          <select
          
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>Light</option>
            <option selected="">Dark</option>
            <option>Color</option>
          </select>
        </div>
      </div>
    </div>
    <div class="py-4 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">
          Уведомления
        </h2>
        <p class="mt-2 text-sm text-gray-500">Настройка уведомлений и рассылок</p>
      </div>

     

      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <fieldset>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="h-5 flex items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="comments" class="font-medium text-gray-700"
                    >Получать статистику Google Ads</label
                  >
                  <p class="text-gray-500">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
              <div>
                <div class="flex items-start">
                  <div class="h-5 flex items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="candidates" class="font-medium text-gray-700"
                      >Получать статистику сайта</label
                    >
                    <p class="text-gray-500">
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
              </div>
              <div>
               
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      
      
    </div>
    <div class="py-4 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">
          Уведомления в СМС и Viber
        </h2>
        <p class="mt-2 text-sm text-gray-500">Настройка уведомлений и рассылок</p>
      </div>

     

      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
           <Switch v-model="enabled" :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-8 w-20 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
    <span class="sr-only">Use setting</span>
    <span :class="[enabled ? 'translate-x-12' : 'translate-x-0', 'pointer-events-none relative inline-block h-7 w-7 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']">
      <span :class="[enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity']" aria-hidden="true">
        <svg class="bg-white h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
          <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
      <span :class="[enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100', 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity']" aria-hidden="true">
        <svg class="bg-white h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
          <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
        </svg>
      </span>
    </span>
  </Switch>
  <div class="text-gray-500 text-sm hover:text-gray-700 mt-1">
   
   <a href="/profile">Указать номер телефона </a>
  </div>
  <div class="flex justify-start mt-4" >
  <button class="bg-indigo-600 text-white rounded h-8 w-16 hover:bg-indigo-800 mt-4">Save</button>
        </div>
      </div>
      </div>
      
    </div>
  </form>
</template>

<script >
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};

export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },

  setup() {
    const store = useStore();
    const open = ref(false);
    const availableToHire = ref(true);
    const privateAccount = ref(false);
    const allowCommenting = ref(true);
    const allowMentions = ref(true);
    const enabled = ref(true);

    return {
      count: computed(() => store.state.user.user),

      open,
      availableToHire,
      privateAccount,
      allowCommenting,
      allowMentions,
      enabled,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>