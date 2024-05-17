function createFavoriteList() {
  localStorage.setItem("favoriteList", JSON.stringify([]));
}

function getFavoriteList(): string[] {
  const list = localStorage.getItem("favoriteList");
  console.log("type list:", typeof list);
  let favoriteList = list ? JSON.parse(list) : [];

  if(favoriteList == null) {
    createFavoriteList();
    favoriteList = JSON.parse(list as any);
  }

  return favoriteList;
}

function hasItemOnFavoriteList(id: string): boolean {
  const list = getFavoriteList();
  let isOnTheList = false;

  list.forEach((element) => {
    if (element == id) {
      isOnTheList = true;
    }
  });
  
  return isOnTheList;
}

function addItemToFavoritList(item: string) {
  let list = getFavoriteList();

  if (item) {
    list.push(item);
    localStorage.setItem("favoriteList", JSON.stringify(list));
  }
}

function removeItemOfFavoritList(id: string) {
  let list = getFavoriteList();

  list.forEach((element, index) => {
    if (element == id) {
      list.splice(index, 1);
    }
  });
  localStorage.setItem("favoriteList", JSON.stringify(list));
}

export {
  getFavoriteList,
  hasItemOnFavoriteList,
  addItemToFavoritList,
  removeItemOfFavoritList
};
