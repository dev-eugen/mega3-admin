<template>
  <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
    <!-- Profile section -->
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">Profile</h2>
      </div>

      <div class="mt-6 flex flex-col lg:flex-row">
        <div
          class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0"
        ></div>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-12 gap-6 ml-4 py-8">
      <div class="col-span-12 sm:col-span-6">
        <label for="first_name" class="block text-sm font-medium text-gray-700"
          >First name</label
        >
        <input type="text" name="first_name" id="first_name"
         class="mt-1 block w-full border
        border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none
        focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
          :value="title"
        @input="$emit('update:title', $event.target.value)"/>
      </div>

      <div class="col-span-12 sm:col-span-6">
        <label for="last_name" class="block text-sm font-medium text-gray-700"
          >Last name</label
        >
        <input
          type="text"
          name="last_name"
          id="last_name"
          autocomplete="family-name"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
        />
      </div>

      <div class="col-span-12">
        <label for="url" class="block text-sm font-medium text-gray-700"
          >URL</label
        >
        <input
          type="text"
          name="url"
          id="url"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
        />
      </div>

      <div class="col-span-12 sm:col-span-6">
        <label for="company" class="block text-sm font-medium text-gray-700"
          >Company</label
        >
        <input
          type="text"
          name="company"
          id="company"
          autocomplete="organization"
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
        />
      </div>
    </div>

    <!-- Privacy section -->
    <div class="pt-6 divide-y divide-gray-200">
      <div class="px-4 sm:px-6">
        <div>
          <h2 class="text-lg leading-6 font-medium text-gray-900">Privacy</h2>
          <p class="mt-1 text-sm text-gray-500">
            Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
          </p>
        </div>
        <ul class="mt-2 divide-y divide-gray-200">
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Available to hire
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.
              </SwitchDescription>
            </div>
            <Switch
              v-model="availableToHire"
              :class="[
                availableToHire ? 'bg-blue-500' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500',
              ]"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                :class="[
                  availableToHire ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Make account private
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Pharetra morbi dui mi mattis tellus sollicitudin cursus
                pharetra.
              </SwitchDescription>
            </div>
            <Switch
              v-model="privateAccount"
              :class="[
                privateAccount ? 'bg-blue-500' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500',
              ]"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                :class="[
                  privateAccount ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Allow commenting
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Integer amet, nunc hendrerit adipiscing nam. Elementum ame
              </SwitchDescription>
            </div>
            <Switch
              v-model="allowCommenting"
              :class="[
                allowCommenting ? 'bg-blue-500' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
              ]"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                :class="[
                  allowCommenting ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Allow mentions
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Adipiscing est venenatis enim molestie commodo eu gravid
              </SwitchDescription>
            </div>
            <Switch
              v-model="allowMentions"
              :class="[
                allowMentions ? 'bg-blue-500' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500',
              ]"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                :class="[
                  allowMentions ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
        </ul>
      </div>
      <div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
        <button
          type="button"
          class="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="ml-5 bg-blue-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script >
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import { SearchIcon } from "@heroicons/vue/solid";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  MenuIcon,
  UserCircleIcon,
  ViewGridAddIcon,
  XIcon,
} from "@heroicons/vue/outline";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Jobs", href: "#", current: false },
  { name: "Applicants", href: "#", current: false },
  { name: "Company", href: "#", current: false },
];
const subNavigation = [
  { name: "Profile", href: "#", icon: UserCircleIcon, current: true },
  { name: "Account", href: "#", icon: CogIcon, current: false },
  { name: "Password", href: "#", icon: KeyIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Integrations", href: "#", icon: ViewGridAddIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
    BellIcon,
    MenuIcon,
    SearchIcon,
    XIcon,
  },
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
            setup(props, {
            emit
        }) {
            const error = computed(() => props.title.length > 70 ? "Max length 70" : null)
            watchEffect(() => emit('update:description', props.description))
            return {
                error
            };
        },
  setup() {
    const open = ref(false);
    const availableToHire = ref(true);
    const privateAccount = ref(false);
    const allowCommenting = ref(true);
    const allowMentions = ref(true);
    const enabled = ref(true);

    return {
      user,
      navigation,
      subNavigation,
      userNavigation,
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