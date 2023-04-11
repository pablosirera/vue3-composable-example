import { ref } from "vue";

const user = ref({ name: "Pablo" });

export function useUser() {
  const setUser = (value) => {
    user.value = value;
  };

  return {
    user,
    setUser,
  };
}
