 <template>
  <form class="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div class="flex justify-center">
        <h3  class="text-gray-900 text-lg mt-8"
          >Connect your Social media</h3
        >
      </div>
      <div class="flex items-center  justify-center h-64 space-x-4">
        <img
          src="http://pngimg.com/uploads/instagram/small/instagram_PNG3.png"
          alt=""
          class="md:h-24"
        />
         <img
          src="http://pngimg.com/uploads/facebook_logos/small/facebook_logos_PNG19754.png"
          alt=""
          class="md:h-24 "
        />
         <img
          src="https://lh3.googleusercontent.com/proxy/Ogfb6W8L3sMEQzpZlI2Jfglv7R2Q07NgZVoc57vo6twwMF50t-BJL7ae93V4ZoY_bohRSW2Bg3q1Zt8Mw-YZxARbsJzcSEc"
          alt=""
          class="md:h-24 "
        />
          <img
          src="https://cdn.icon-icons.com/icons2/2201/PNG/512/telegram_logo_circle_icon_134012.png"
          alt=""
          class="md:h-24 "
        />
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