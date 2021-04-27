<template>
  
</template>

<script >
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
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
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};

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