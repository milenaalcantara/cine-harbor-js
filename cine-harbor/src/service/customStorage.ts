class Storage {
  #createFavoriteList() {
    localStorage.setItem("favoriteList", JSON.stringify([]));
  }

  // Create
  addItem(item) {
    let list = this.getFavoriteList();
    list.push(item);
    localStorage.setItem("favoriteList", JSON.stringify(list));
  }

  // Read
  getItem(id) {
    const list = this.getFavoriteList();
    let isOnTheList = false;

    list.forEach((element) => {
      if (element.id == id) {
        isOnTheList = true;
      }
    });
    // return item
    return isOnTheList;
  }

  // Delete
  removeItem(id) {
    let list = this.getFavoriteList();

    list.forEach((element, index) => {
      if (element.id == id) {
        list.splice(index, 1);
      }
    });
    localStorage.setItem("favoriteList", JSON.stringify(list));
  }

  getFavoriteList() {
    let favoriteList = JSON.parse(localStorage.getItem("favoriteList"));

    if (favoriteList == null) {
      this.#createFavoriteList();
      favoriteList = JSON.parse(localStorage.getItem("favoriteList"));
    }

    return favoriteList;
  }
}

const storage = new Storage();

export default storage;
