import categoriesReducer, { toggleCategory } from "../store/categoriesSlice";

describe("categoriesSlice reducer", () => {
  const initialState = {
    selectedCategories: [],
  };

  it("should handle toggleCategory", () => {
    const newState = categoriesReducer(
      initialState,
      toggleCategory("Serenity")
    );
    expect(newState.selectedCategories).toEqual(["Serenity"]);

    const updatedState = categoriesReducer(
      newState,
      toggleCategory("Serenity")
    );
    expect(updatedState.selectedCategories).toEqual([]);
  });

  it("should handle multiple categories", () => {
    const newState = categoriesReducer(
      initialState,
      toggleCategory("Serenity")
    );
    const updatedState = categoriesReducer(
      newState,
      toggleCategory("Affection")
    );
    expect(updatedState.selectedCategories).toEqual(["Serenity", "Affection"]);

    const removedState = categoriesReducer(
      updatedState,
      toggleCategory("Serenity")
    );
    expect(removedState.selectedCategories).toEqual(["Affection"]);
  });
});
