<template>
  <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
    <!-- Profile section -->
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">
          Информация о компании
        </h2>
        <p class="mt-1 text-sm text-gray-500">
          Настройка информации о компании
        </p>
      </div>

      <div class="mt-6 flex flex-col lg:flex-row">
        <div class="flex-grow space-y-6"></div>
      </div>

      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label for="first_name" class="label">Название компании*</label>
          <input type="text" v-model="companyName" class="input" />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label for="last_name" class="label"> E-mail* </label>
          <input type="text" v-model="email" class="input" />
        </div>

        <div class="col-span-12">
          <label for="url" class="label">Контактное лицо*</label>
          <input
            type="text"
            name="url"
            id="url"
            class="input"
            v-model="contactData"
          />
        </div>
      </div>
    </div>
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">Телефон*</h2>
        <p class="mt-1 text-sm text-gray-500">Данные для авторизации</p>
      </div>

      <div class="mt-6 flex flex-col lg:flex-row">
        <div class="flex-grow space-y-6"></div>
      </div>

      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label for="first_name" class="label">Номер телефона*</label>

          <input type="text" class="input" v-model="numberUser" />
        </div>

        <div class="col-span-12 sm:col-span-6">
          <label for="last_name" class="label">Добавочный</label>
          <input type="text" v-model="numberUser2" class="input" />
        </div>

        <div class="col-span-12">
          <label for="url" class="label">Коментарий</label>
          <input
            type="text"
            name="url"
            id="url"
            class="input"
            v-model="comment"
          />
          <p class="mt-4 text-sm text-gray-500">
            Настройте и сохраните личную информацию
          </p>
        </div>
      <div><button class="bg-indigo-600 rounded hover:bg-indigo-700 h-8 w-24 text-white "  @click="addItem"  > Добавить</button></div>
      </div>
    </div>
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">
          Другие виды связи
        </h2>
      </div>

      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <Menu as="div" class="relative text-left">
            <div>
              <MenuButton
                class="flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              >
                Выберите социальную сеть
                <ChevronDownIcon
                  class="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right  right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Skype</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >ICQ</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >WhatsApp</a
                    >
                  </MenuItem>
                  <form method="POST" action="#">
                    <MenuItem v-slot="{ active }">
                      <button
                        type="submit"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full text-left px-4 py-2 text-sm',
                        ]"
                      >
                        Сайт компании
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </form>
</template>

<script >
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";



const contactData = "";
const companyName = "";
const numberUser = "";
const numberUser2 = "";
const comment = "";

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
    const email = ref();
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
      numberUser,
      numberUser2,
      comment,
      email,
      contactData,
      companyName,
    
     items: [
        {id: 1, title: 'Musor'},
      {id: 2, title: 'Musor2'},

      ]

    };
    
  },
   methods:{
  addItem: function(){
    this.items.push({
      id: this.nextItemsiId,
      title: this.newItemsText
    })
  }
  },
};
</script>

<style lang="scss" scoped>
</style>