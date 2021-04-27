 <template>
  <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
    <!-- Profile section -->
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900">Credit card</h2>
        <p class="mt-1 text-sm text-gray-500">Add your card</p>
      </div>
      <div class="flex space-x-4 justify-center">
        <img
          src="https://images.unsplash.com/photo-1572798793834-67d5e285760d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
          alt=""
          class="h-64 mt-8 rounded-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1613243555988-441166d4d6fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
          class="h-64 mt-8 rounded-lg"
          alt=""
        />
      </div>

      <div class="mt-6 flex flex-col lg:flex-row">
        <div class="flex-grow space-y-6"></div>
      </div>

      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6">
          <label
            for="first_name"
            class="label"
            >Numder</label
          >
          <div class="flex">
            <img
              src="https://www.mastercard.ru/etc/designs/mccom/ru-ru/jcr:content/global/logo.img.png/1575295662472.png"
              alt=""
              class="h-10 w-18"
            />
            <img
              src="https://logosklad.ru/photo/logos/290/1494134204.jpg"
              class="h-10 w-10 ml-2"
              alt=""
            />
          </div>
          <input
            type="text"
            name="first_name"
            id="first_name"
            autocomplete="given-name"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
          />
        </div>

        <div class="col-span-12 sm:col-span-6 md:mt-10">
          <label for="last_name" class="label"
            >The card is valid until</label
          >
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="01/21"
            autocomplete="family-name"
            class="placeholder-gray-400 mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
          />
        </div>

        <div class="col-span-4">
          <label for="url" class="label"
            >CVC
          </label>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="111"
            class="placeholder-gray-400 mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
          />
           <div class="mt-6 flex justify-start">
          <button
            class="h-9 w-16 rounded-full bg-blue-600 text-white hover:bg-blue-800"
          >
            Save
          </button>
        </div>
        </div>
       
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