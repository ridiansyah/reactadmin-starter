export const alert = (
  state = { berhasil: false, gagal: false, pesan: "" },
  action
) => {
  switch (action.type) {
    case "FILL_BERHASIL": {
      return { ...state, berhasil: action.berhasil, pesan: action.pesan };
    }
    case "FILL_GAGAL": {
      return { ...state, gagal: action.gagal, pesan: action.pesan };
    }
    default: {
      return state;
    }
  }
};
