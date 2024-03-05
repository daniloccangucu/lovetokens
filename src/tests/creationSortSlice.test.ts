import { SortSettings } from "../models/Types";
import creationSortReducer, { setSortOrder } from "../store/creationSortSlice";

const initialState: SortSettings = {
  sortOrder: "newest",
};

describe("creationSortSlice reducer", () => {
  it("should handle setSortOrder", () => {
    const newState = creationSortReducer(
      initialState,
      setSortOrder({ sortOrder: "oldest" })
    );
    expect(newState.sortOrder).toEqual("oldest");
  });

  it("should not modify state for unknown action types", () => {
    const newState = creationSortReducer(initialState, {
      type: "UNKNOWN_ACTION",
    });
    expect(newState).toEqual(initialState);
  });
});
