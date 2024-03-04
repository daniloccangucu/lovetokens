import authReducer, { updateAuthStatus } from "../store/authSlice";

describe("authSlice reducer", () => {
  const initialState = {
    updateAuthStatus: false,
  };

  it("should handle updateAuthStatus", () => {
    const newState = authReducer(initialState, updateAuthStatus());
    expect(newState.updateAuthStatus).toEqual(true);
    const toggledState = authReducer(newState, updateAuthStatus());
    expect(toggledState.updateAuthStatus).toEqual(false);
  });
});
